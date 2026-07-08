#!/usr/bin/env node

import { program } from "commander";
import { showBanner } from "./core/banner.js";
import { registerDoctorCommand } from "./commands/doctor.js";

showBanner();

program
  .name("labs")
  .description("L.A.B.S. - AI Product Engineering Framework")
  .version("0.1.0");

registerDoctorCommand(program);

program.parse();