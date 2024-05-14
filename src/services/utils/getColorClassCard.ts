import { TColor } from "../types/common";

export const getColorClassCard = (styles: CSSModuleClasses, color: TColor) => {
  const classes = [styles.line];

  if (color === "red") {
    classes.push(styles.red);
  }
  if (color === "yellow") {
    classes.push(styles.yellow);
  }
  if (color === "green") {
    classes.push(styles.green);
  }

  return classes;
};
