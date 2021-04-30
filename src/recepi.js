import React from "react";

const Recipe = ({ title, img }) => {
  return (
    <div className="recipe">
      <div className="recipe-content">
        <img src={img} alt="" />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Recipe;
