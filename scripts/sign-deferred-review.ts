// A script to submit an addon for review and not worry that review is deferred. web-ext
// is weird that way -- it will return a non-zero exit code if it works "correctly". see
// https://github.com/mozilla/web-ext/issues/804

// the gist of this script is to run web-ext as a child_process and look at the output for the
// message that says "It passed validation but could not..."

import child_process from "node:child_process";
import stream from "node:stream";

const successOutput =
  "It passed validation but could not be automatically signed because this is a listed add-on.";
let success = false;
const transform = {
  transform(data: Buffer, _, callback: stream.TransformCallback) {
    const stringified = data.toString();
    if (stringified.includes(successOutput)) {
      success = true;
    }
    callback(undefined, stringified);
  },
};
const stdoutDuplex = new stream.Transform(transform);
const stderrDuplex = new stream.Transform(transform);
const command =
  "web-ext sign --source-dir ./dist --api-key $WEB_EXT_API_KEY --api-secret $WEB_EXT_API_SECRET";

const getLogBufferPrinter =
  (logFunction: (message?: unknown, ...optionalParameters: unknown[]) => void) =>
  (data: Buffer) => {
    const stringified = data.toString();
    logFunction(stringified);
  };

const main = () => {
  console.log(`Running command: ${command}`);
  const proc = child_process.exec(
    // don't need to prefix with pnpm because the node modules bin dir is already on the path
    command
  );

  proc.stdout?.pipe(stdoutDuplex);
  stdoutDuplex.on("data", getLogBufferPrinter(console.log));

  proc.stderr?.pipe(stderrDuplex);
  stderrDuplex.on("data", getLogBufferPrinter(console.error));

  proc.on("exit", (code) => {
    if (code === 0) {
      success = true;
    }
    if (!success) {
      throw new Error(
        `The command did not return a zero exit code and it did not output the expected message.`
      );
    }
    console.log(
      `Detected that submission succeeded and review will take place soon. That's as much as we ` +
        `can do right now.`
    );
  });
};

main();
