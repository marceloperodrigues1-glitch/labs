import chalk from "chalk";

export function doctor(): void {
  console.log();

  console.log(chalk.green("✔ Ambiente OK"));
  console.log(`Node     : ${process.version}`);
  console.log(`Platform : ${process.platform}`);
  console.log(`Arquitetura: ${process.arch}`);

  console.log();
}