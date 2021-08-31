import React from "react";

import "./BorderBtn.css";

const BorderBtn = (props) => {
  return (
    <button className="border__btn" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default BorderBtn;
