/**
 * Simple logging library
 */
const logForLevel = (logFunction: (...data: unknown[]) => void) => {
  return (...data: unknown[]) => {
    logFunction(`[crosseyed]`, ...data);
  };
};

export const log = {
  error: logForLevel(console.error),
  warn: logForLevel(console.warn),
  log: logForLevel(console.log),
  info: logForLevel(console.info),
  debug: logForLevel(console.debug),
}