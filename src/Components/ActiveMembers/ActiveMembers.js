import React from "react";
import "./ActiveMembers.css";
import Calendar from "react-calendar";

import { members } from "../../AllData/data";

function ActiveMembers({ title }) {
  return (
    <div className="activeMembers">
      <h4>{title}</h4>
      <div className="activeMembers__members">
        {title === "Recently Active Members" ? (
          members.map((item, index) => {
            return <img src={item.img} alt={item.title} key={index} />;
          })
        ) : (
          <Calendar calendarType="Arabic" className="react-calendar" />
        )}
      </div>
    </div>
  );
}

export default ActiveMembers;
