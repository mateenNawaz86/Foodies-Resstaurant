import React from "react";
import PageTitle from "../../DishPage/CardUI/Title/PageTitle";
import MenuCard from "../MenuCard/Card/MenuCard";

import img1 from "../MenuCard/imgs/chicken-karhai.jpg";
import img2 from "../MenuCard/imgs/Fri-Chicken.jpg";
import img3 from "../MenuCard/imgs/Soap.jpg";
import img4 from "../MenuCard/imgs/Pasta.jpg";
import img5 from "../MenuCard/imgs/Sandwich.jpg";
import img6 from "../MenuCard/imgs/Chicken-roast.jpg";
import img7 from "../MenuCard/imgs/Chicken-samosa.jpg";
import img8 from "../MenuCard/imgs/burger.jpg";
import img9 from "../MenuCard/imgs/grilled-beef.jpg";
import img10 from "../MenuCard/imgs/Coffee.jpg";
import img11 from "../MenuCard/imgs/orange-juice.jpg";
import img12 from "../MenuCard/imgs/Dessert.jpg";

const Menu = () => {
  return (
    <>
      <div className="main__container">
        <PageTitle title="Our Menu" />

        <div className="cards__area">
          <div className="row1">
            <MenuCard
              imgSrc={img1}
              dishPrice="11.94"
              dishName="Special Karhai"
            />
            <MenuCard
              imgSrc={img2}
              dishPrice="9.21"
              dishName="Fri Chicken Pieces"
            />
            <MenuCard imgSrc={img3} dishPrice="7.56" dishName="Special Soap" />
          </div>

          <div className="row1">
            <MenuCard imgSrc={img4} dishPrice="8.14" dishName="Pasta" />
            <MenuCard
              imgSrc={img5}
              dishPrice="5.90"
              dishName="cheese sandwich"
            />
            <MenuCard imgSrc={img6} dishPrice="8.36" dishName="chicken roast" />
          </div>

          <div className="row1">
            <MenuCard
              imgSrc={img7}
              dishPrice="4.67"
              dishName="Chicken samosa"
            />
            <MenuCard imgSrc={img8} dishPrice="7.32" dishName="beef burger" />
            <MenuCard imgSrc={img9} dishPrice="13.78" dishName="grilled beef" />
          </div>

          <div className="row1">
            <MenuCard imgSrc={img10} dishPrice="5.27" dishName="black coffee" />
            <MenuCard imgSrc={img11} dishPrice="6.12" dishName="orange juice" />
            <MenuCard imgSrc={img12} dishPrice="8.18" dishName="Dessert" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
