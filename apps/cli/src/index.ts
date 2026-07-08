#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

console.log();

console.log(chalk.cyan("🚀 L.A.B.S."));
console.log(chalk.gray("Learning AI Build System"));
console.log(chalk.gray("Version 0.1.0"));
console.log();

program
  .name("labs")
  .description("AI Product Engineering Framework")
  .version("0.1.0");

program
  .command("doctor")
  .description("Verifica o ambiente")
  .action(() => {
    console.log(chalk.green("✔ Ambiente OK"));
    console.log("Node :", process.version);
    console.log("OS   :", process.platform);
  });

program.parse();