import React from "react";
import s from "./card.module.scss";

const Card = ({ name, image, description, price, altText }) => {
  return (
    <li className={s.card}>
      <img src={image} alt={altText} className={s.card__image} />
      <div className={s.card__content}>
        <p className={s.card__title}>{name}</p>
        <p className={s.card__description}>{description}</p>
        <span className={s.card__price}>{price}</span>
      </div>
    </li>
  );
};

export default Card;
