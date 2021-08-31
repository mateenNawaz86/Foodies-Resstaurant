import React from "react";
import Title from "../../../UI/Title";

const PageTitle = (props) => {
  return (
    <>
      <div className="title__section">
        <Title>{props.title}</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos,
          numquam perferendis fuga molestiae aliquid temporibus officia, vero
          odit rerum iusto magni? Soluta, cupiditate modi!
        </p>
      </div>
    </>
  );
};

export default PageTitle;
