#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { doctor } from "./commands/doctor.js";

const program = new Command();

console.log();
console.log(chalk.cyan("🚀 L.A.B.S."));
console.log(chalk.gray("Learning AI Build System"));
console.log(chalk.gray("Version 0.1.0"));
console.log();

program
  .name("labs")
  .description("Learning AI Build System")
  .version("0.1.0");

program
  .command("doctor")
  .description("Verifica o ambiente de desenvolvimento")
  .action(doctor);

program.parse(process.argv);