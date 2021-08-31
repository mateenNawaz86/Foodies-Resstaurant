import React from "react";
import BorderCard from "./BorderCard";

import "./MenuCard.css";
import CardName from "../../../DishPage/CardUI/Cards/CardName";
import Stars from "../../../DishPage/CardUI/Cards/Stars";
import Price from "../../../DishPage/CardUI/Cards/Price";
import DarkBtn from "../../../UI/DarkBtn";

const MenuCard = (props) => {
  const dishRcp = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt nemo nostrum odio cumque consequuntur.`;

  return (
    <>
      <div className="menu__card">
        <BorderCard>
          <div className="menu__inner">
            <div className="menu__imgs">
              <img src={props.imgSrc} alt="Menu Dish" />
            </div>
            <div className="menu-content__container">
              <div className="menu__content">
                <Stars />
                <CardName>{props.dishName}</CardName>
                <p>{dishRcp}</p>
              </div>

              <div className="menu__prices">
                <DarkBtn>Add to cart</DarkBtn>
                <Price>{props.dishPrice}</Price>
              </div>
            </div>
          </div>
        </BorderCard>
      </div>
    </>
  );
};

export default MenuCard;
