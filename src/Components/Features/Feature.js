import React from "react";
import "./Feature.css";

function Feature({ desc, img }) {
  return (
    <div className="feature">
      <div className="feature__imgBox">
        <img src={img} alt={desc} />
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default Feature;
