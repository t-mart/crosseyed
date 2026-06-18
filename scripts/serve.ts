/*
 * Dev host for the userscript.
 *
 * Runs `vite build --watch` so dist/crosseyed.user.js rebuilds on every source
 * change, and serves that file over HTTP. Navigating a userscript manager to the
 * .user.js URL triggers its install/update screen, so the dev loop is: edit,
 * revisit the URL, reinstall.
 */

const PORT = 5174;
const SCRIPT = new URL("../dist/crosseyed.user.js", import.meta.url);
const SCRIPT_PATH = "/dist/crosseyed.user.js";
const SCRIPT_URL = new URL(`http://localhost:${PORT}${SCRIPT_PATH}`).href;

function shutdown() {
  Deno.exit(0);
}

Deno.addSignalListener("SIGINT", shutdown);
Deno.addSignalListener("SIGTERM", shutdown);

// Whether the client's cached copy still matches the current file. Pure: the
// validators are derived from the file's size and mtime.
function isFresh(request: Request, etag: string, mtimeMs: number): boolean {
  const ifNoneMatch = request.headers.get("if-none-match");
  if (ifNoneMatch) return ifNoneMatch === etag;

  const ifModifiedSince = request.headers.get("if-modified-since");
  if (ifModifiedSince) {
    const since = Date.parse(ifModifiedSince);
    // HTTP dates are second-precision; floor the mtime before comparing.
    if (!Number.isNaN(since)) return Math.floor(mtimeMs / 1000) * 1000 <= since;
  }

  return false;
}

async function serveScript(request: Request): Promise<Response> {
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
    etag: etag,
    "last-modified": new Date(mtimeMs).toUTCString(),
  };

  if (isFresh(request, etag, mtimeMs)) {
    return new Response(undefined, { status: 304, headers });
  }
  console.log("Got request for updated script; serving fresh copy");
  return new Response(code, { headers });
}

Deno.serve({ port: PORT }, (request) => {
  const path = new URL(request.url).pathname;
  if (path === SCRIPT_PATH) return serveScript(request);
  return Response.redirect(new URL(SCRIPT_PATH, request.url), 302);
});

console.log(`\nServing userscript at ${SCRIPT_URL}\n`);
