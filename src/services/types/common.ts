export type TColor = "red" | "green" | "yellow";

export interface ICard {
  title: string;
  number: number;
  text: string;
  color: TColor;
  isLast?: boolean;
}
