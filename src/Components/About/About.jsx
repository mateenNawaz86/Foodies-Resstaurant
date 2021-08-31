import React from "react";
import Title from "../UI/Title";
import Card from "../UI/Card";
import BorderBtn from "../UI/BorderBtn";
import DarkBtn from "../UI/DarkBtn";

import "./About.css";

const About = () => {
  const abouttext = [
    "Best Food in the City",
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Repellat quod itaque nostrum libero voluptas consequatur
  labore officia pariatur minus recusandae, dolor earum non
  ipsam tempore aut amet dicta iste praesentium!`,
    ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Dolorum vel omnis consequatur est vitae esse consectetur
  excepturi, dolorem eveniet id.`,
  ];

  return (
    <>
      <div className="main__container">
        <div className="title__section">
          <Title>About Us</Title>
          <p>Why you choose us?</p>
        </div>

        <div className="about__card">
          <Card>
            <div className="inner__card">
              <div className="about__img">
                <img src="../img/pasta.png" alt="Pasta" />
              </div>

              <div className="about__text">
                <h1>{abouttext[0]}</h1>
                <div className="review">
                  <p>{abouttext[1]}</p>
                  <p>{abouttext[2]}</p>
                </div>

                <div className="btns">
                  <BorderBtn type="submit">
                    <i className="fas fa-truck" />
                    Free Deleivery
                  </BorderBtn>

                  <BorderBtn type="submit">
                    <i className="fas fa-dollar-sign" />
                    Payment
                  </BorderBtn>
                  <BorderBtn type="submit">
                    <i className="fas fa-headset" />
                    24/7 Service
                  </BorderBtn>
                </div>

                <DarkBtn type="submit">learn more</DarkBtn>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
