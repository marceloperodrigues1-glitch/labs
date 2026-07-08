import path from "node:path";
import process from "node:process";

export const paths = {

  cwd() {
    return process.cwd();
  },

  resolve(...segments: string[]) {
    return path.resolve(...segments);
  }

};