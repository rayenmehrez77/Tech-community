import React from "react";
import "./Statistic.css";

function Statistic({ number, Icon, title }) {
  return (
    <div className="statistic">
      <div className="statistic__left">
        {Icon} {title}
      </div>
      {number}
    </div>
  );
}

export default Statistic;
