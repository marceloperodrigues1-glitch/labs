import fs from "node:fs";

export function exists(file: string) {
  return fs.existsSync(file);
}

export function mkdir(dir: string) {
  fs.mkdirSync(dir, {
    recursive: true
  });
}