import boxen from "boxen";
import gradient from "gradient-string";

export function showBanner() {
  const title = gradient.pastel.multiline(`
L.A.B.S.
Learning AI Build System
`);

  console.log(
    boxen(title, {
      padding: 1,
      borderStyle: "round",
    }),
  );
}