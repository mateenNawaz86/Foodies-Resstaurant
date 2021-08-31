import React from "react";
import Card from "../../../UI/Card";
import CardName from "./CardName";
import Stars from "./Stars";
import DarkBtn from "../../../UI/DarkBtn";
import Price from "./Price";

import "./CardDish.css";

const CardDish = (props) => {
  return (
    <>
      <div className="outer__card">
        <Card>
          <div className="inner-card__container">
            <div className="card__img">
              <img src={props.imgSrc} alt="Burger" />
            </div>

            <div className="card__content">
              <div className="card__text">
                <CardName>{props.dishTitle}</CardName>
                <Stars />
              </div>

              <div className="btn_price">
                <Price>{props.dishPrice}</Price>
                <DarkBtn>Add to Cart</DarkBtn>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardDish;
