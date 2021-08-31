import React from "react";

import "./DarkBtn.css";

const DarkBtn = (props) => {
  return (
    <button className="darkBtn" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default DarkBtn;
