import { execSync } from "node:child_process";

export function getGitVersion(): string {
  try {
    return execSync("git --version", {
      encoding: "utf8",
    }).trim();
  } catch {
    return "Git não encontrado";
  }
}