import React from "react";

import "./Price.css";

const Price = (props) => {
  return (
    <>
      <h4 className="card-price">${props.children}</h4>
    </>
  );
};

export default Price;
