import React from "react";

import "./CardName.css";

const CardName = (props) => {
  return (
    <>
      <h2 className='cardName'>{props.children}</h2>
    </>
  );
};

export default CardName;
