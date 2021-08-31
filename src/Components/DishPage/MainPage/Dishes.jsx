import React from "react";
import PageTitle from "../CardUI/Title/PageTitle";
import CardDish from "../CardUI/Cards/CardDish";


import img1 from "../CardUI/img_assests/noodles.jpg";
import img2 from "../CardUI/img_assests/fries.jpg";
import img3 from "../CardUI/img_assests/grilles.jpg";
import img4 from "../CardUI/img_assests/Bred-amlet.jpg";
import img5 from "../CardUI/img_assests/egg-rise.jpg";
import img6 from "../CardUI/img_assests/fried-fish.jpg";

const Dishes = () => {
  return (
    <>
      <div className="main__container">
        <PageTitle title="Our Dishes" />

        <div className="cards__area">
          <div className="row1">
            <CardDish
              dishTitle="Chines Noodles"
              dishPrice="9.01"
              imgSrc={img1}
            />
            <CardDish dishTitle="Potato Fries" dishPrice="4.43" imgSrc={img2} />
            <CardDish
              dishTitle="Chicken Nuggets"
              dishPrice="12.81"
              imgSrc={img3}
            />
          </div>
          <div className="row1">
            <CardDish dishTitle="Bread Egg" dishPrice="3.95" imgSrc={img4} />
            <CardDish dishTitle="Egg Rise" dishPrice="8.93" imgSrc={img5} />
            <CardDish dishTitle="Fried Fish" dishPrice="5.23" imgSrc={img6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dishes;
