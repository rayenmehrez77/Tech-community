import React from "react";
import "./SingleComponent.css";

function SingleComponent({ img, title, tag }) {
  return (
    <div className="singleComponent">
      <img src={img} alt={title} />
      <div className="singleComponent__info">
        <h5>{title}</h5>
        <button>{tag}</button>
      </div>
    </div>
  );
}

export default SingleComponent;
