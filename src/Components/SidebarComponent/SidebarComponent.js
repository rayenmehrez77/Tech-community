import React from "react";
import "./SidebarComponent.css";
import SingleComponent from "../SingleComponent/SingleComponent";
import { members, groups } from "../../AllData/data";

function SidebarComponent({ tags, title }) {
  return (
    <div className="sidebarComponent">
      <h4>{title}</h4>
      <div className="sidebarComponent__tags">
        {tags.map((tag, index) => {
          return (
            <button className="sidebarComponent__tag" key={index}>
              {tag}
            </button>
          );
        })}
      </div>
      <div className="sidebarComponent__content">
        {title === "Members"
          ? members.map((item) => {
              return <SingleComponent {...item} key={item.id} />;
            })
          : groups.map((item) => {
              return <SingleComponent {...item} key={item.id} />;
            })}
      </div>
    </div>
  );
}

export default SidebarComponent;
