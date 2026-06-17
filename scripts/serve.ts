/*
 * Dev host for the userscript.
 *
 * Runs `vite build --watch` so dist/crosseyed.user.js rebuilds on every source
 * change, and serves that file over HTTP. Navigating a userscript manager to the
 * .user.js URL triggers its install/update screen, so the dev loop is: edit,
 * revisit the URL, reinstall.
 */

const PORT = Number(Deno.env.get("PORT") ?? 8842);
const SCRIPT = "dist/crosseyed.user.js";
const SCRIPT_URL = `http://localhost:${PORT}/crosseyed.user.js`;

const vite = new Deno.Command("deno", {
  args: ["run", "-A", "npm:vite", "build", "--watch"],
  stdout: "inherit",
  stderr: "inherit",
}).spawn();

function shutdown() {
  try {
    vite.kill("SIGTERM");
  } catch {
    // already gone
  }
  Deno.exit(0);
}

Deno.addSignalListener("SIGINT", shutdown);
Deno.addSignalListener("SIGTERM", shutdown);

// Whether the client's cached copy still matches the current file. Pure: the
// validators are derived from the file's size and mtime.
function isFresh(req: Request, etag: string, mtimeMs: number): boolean {
  const ifNoneMatch = req.headers.get("if-none-match");
  if (ifNoneMatch) return ifNoneMatch === etag;

  const ifModifiedSince = req.headers.get("if-modified-since");
  if (ifModifiedSince) {
    const since = Date.parse(ifModifiedSince);
    // HTTP dates are second-precision; floor the mtime before comparing.
    if (!Number.isNaN(since)) return Math.floor(mtimeMs / 1000) * 1000 <= since;
  }

  return false;
}

async function serveScript(req: Request): Promise<Response> {
  let stat: Deno.FileInfo;
  let code: string;
  try {
    stat = await Deno.stat(SCRIPT);
    code = await Deno.readTextFile(SCRIPT);
  } catch {
    return new Response(
      "// userscript not built yet, try again in a moment\n",
      {
        status: 503,
        headers: { "content-type": "text/javascript; charset=utf-8" },
      },
    );
  }

  const mtimeMs = stat.mtime?.getTime() ?? Date.now();
  const etag = `"${stat.size.toString(16)}-${mtimeMs.toString(16)}"`;

  // no-cache (not no-store) so the manager revalidates on each poll: it sends
  // the validators back, and we answer 304 when unchanged or 200 when rebuilt.
  const headers = {
    "content-type": "text/javascript; charset=utf-8",
    "cache-control": "no-cache",
    "etag": etag,
    "last-modified": new Date(mtimeMs).toUTCString(),
  };

  if (isFresh(req, etag, mtimeMs)) {
    return new Response(null, { status: 304, headers });
  }
  return new Response(code, { headers });
}

const landing = `<!doctype html>
<meta charset="utf-8">
<title>Crosseyed</title>
<body style="font-family: system-ui; max-width: 40rem; margin: 4rem auto;">
  <h1>Crosseyed</h1>
  <p><a href="/crosseyed.user.js">Install / update the userscript</a></p>
  <p>Your userscript manager should intercept that link. After editing source,
     the file rebuilds automatically; revisit the link to reinstall.</p>
</body>`;

Deno.serve({ port: PORT }, (req) => {
  const { pathname } = new URL(req.url);
  if (pathname === "/crosseyed.user.js") return serveScript(req);
  if (pathname === "/") {
    return new Response(landing, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
  return new Response("not found", { status: 404 });
});

console.log(`\nServing userscript at ${SCRIPT_URL}\n`);
