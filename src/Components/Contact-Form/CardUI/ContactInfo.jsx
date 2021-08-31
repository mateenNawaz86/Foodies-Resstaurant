import React from "react";

import "./ContactInfo.css";

const ContactInfo = () => {
  const infoData = [
    {
      infoIcon: "fas fa-phone-alt",
      infotxt: "+92 343 5590671",
    },
    {
      infoIcon: "far fa-envelope",
      infotxt: "mateenmirani125@gmail.com",
    },

    {
      infoIcon: "fas fa-map-marker-alt",
      infotxt: "Royal Avenue, Street #4, Islamabad",
    },
  ];

  return (
    <>
      <div className="info-container">
        <div className="heading">
          <h1>Contact Info</h1>
        </div>
        <div className="info-part">
          {infoData.map((items, index) => {
            return (
              <div className="inner-parts" key={index}>
                <i className={items.infoIcon} />
                <p>{items.infotxt}</p>
              </div>
            );
          })}
        </div>

        <div className="social-links">
          <i className="fab fa-linkedin" />
          <i className="fab fa-facebook-square" />
          <i className="fab fa-github-square" />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
