// styles
import styles from "./index.module.scss";
import cn from "classnames";
// react
import { FC } from "react";
// types
import { ICard } from "../../services/types/common";
// utils
import { getColorClassCard } from "../../services/utils/getColorClassCard";

export const Card: FC<ICard> = ({ title, number, text, isLast, color }) => {
  const colorClass = getColorClassCard(styles, color);

  return (
    <li
      className={cn(styles.card, {
        [styles.last]: !!isLast,
      })}
    >
      <div className={cn(colorClass)}></div>
      <h2 className={styles.card__title}>{title}</h2>
      <span className={styles.card__number}>{number}</span>
      <span className={styles.card__text}>{text}</span>
    </li>
  );
};
