import React from "react";

import "./BorderCard.css";

const Card = (props) => {
  return <div className="BorderCard">{props.children}</div>;
};

export default Card;
