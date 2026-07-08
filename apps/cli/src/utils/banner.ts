import chalk from "chalk";
import { APP_NAME, DESCRIPTION, VERSION } from "./constants.js";

export function banner(): void {
  console.log();

  console.log(chalk.cyan(APP_NAME));
  console.log(chalk.gray(DESCRIPTION));
  console.log(chalk.gray(`Version ${VERSION}`));

  console.log();
}