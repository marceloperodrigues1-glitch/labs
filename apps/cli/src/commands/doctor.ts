import { Command } from "commander";
import process from "node:process";
import { logger } from "../services/logger.js";

export function registerDoctorCommand(program: Command) {
  program
    .command("doctor")
    .description("Verifica o ambiente do L.A.B.S.")
    .action(() => {

      logger.line();

      logger.title("Diagnóstico do ambiente");

      logger.success("CLI operacional");

      logger.info(`Node     : ${process.version}`);
      logger.info(`Platform : ${process.platform}`);
      logger.info(`Arch     : ${process.arch}`);

      logger.line();
    });
}