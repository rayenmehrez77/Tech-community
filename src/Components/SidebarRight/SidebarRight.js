import React from "react";
import "./SidebarRight.css";
import SignIn from "../SignIn/SignIn";
import Statistics from "../Statistics/Statistics";
import { posts } from "../../AllData/PostsData";
import { Comments } from "../../AllData/Comments";
import { members, groups } from "../../AllData/data";
import { features } from "../../AllData/FeaturesData";

function SidebarRight() {
  return (
    <div className="sidebarRight">
      <SignIn />
      <Statistics
        posts={posts}
        comments={Comments}
        members={members}
        groups={groups}
        features={features}
      />
      <div className="sidebarRight__online-now">
        <h4>Who's online</h4>
        <p>They are no users currently online </p>
      </div>
      <div className="sidebarRight__replies">
        <h4>Recent Replies</h4>
        <div className="sidebarRight__replies-info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
            <span> 2min ago</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
            <span> 2min ago</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
            <span> 2min ago</span>
          </p>
        </div>
      </div>
      <div className="sidebarRight__topics">
        <h4>Recent Replies</h4>
        <div className="sidebarRight__topics-info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit by Rayen
            Mehrez <span> 2min ago</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit by Houssem
            Mehrez <span> 2min ago</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit by Hamza
            Mehrez <span> 2min ago</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
