import React from "react";
import ActiveMembers from "../ActiveMembers/ActiveMembers";
import SidebarComponent from "../SidebarComponent/SidebarComponent";
import "./SidebarLeft.css";

function SidebarLeft() {
  return (
    <div className="sidebarLeft">
      <div className="sidebarLeft__inputBox">
        <input type="text" placeholder="Search" />
        <button className="sidebarLeft__btn">Search</button>
      </div>
      <SidebarComponent
        title="Members"
        tags={["Newest", "Active", "Popular"]}
      />

      <SidebarComponent
        title="Groups"
        tags={["Newest", "Active", "Popular", "Alphabetical"]}
      />

      <ActiveMembers title="Recently Active Members" />
      <ActiveMembers title="The Schedule" />
    </div>
  );
}

export default SidebarLeft;
