export function getEnvironment() {
  return {
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    cwd: process.cwd(),
  };
}