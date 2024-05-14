// styles
import styles from "./index.module.scss";
// react
import { FC } from "react";
// types
import { ICard } from "../../services/types/common";
// components
import { Card } from "./Card";

interface IProps {
  title: string;
  cards: Array<ICard>;
}

export const CardsList: FC<IProps> = ({ title, cards }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.list}>
        {cards.map((card, index) => (
          <Card
            key={card.number}
            {...{ ...card, isLast: index === cards.length - 1 }}
          />
        ))}
      </ul>
    </div>
  );
};
