import React from "react";
import "./Statistics.css";
import { BiPencil } from "react-icons/bi";
import { FaComment, FaComments } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { MdForum } from "react-icons/md";
import Statistic from "./Statistic";

function Statistics({ posts, comments, groups, members, features }) {
  return (
    <div className="statistics">
      <h4>Statistics</h4>
      <div className="statistics__content">
        <Statistic
          Icon={<BiPencil className="icon" />}
          number={posts.length}
          title="Posts"
        />
        <Statistic
          Icon={<FaComment className="icon" />}
          number={comments.length}
          title="Comments"
        />
        <Statistic
          Icon={<FaComments className="icon" />}
          number={comments.length}
          title="Activity"
        />
        <Statistic
          Icon={<BsFillPersonFill className="icon" />}
          number={members.length}
          title="Members"
        />
        <Statistic
          Icon={<TiGroup className="icon" />}
          number={groups.length}
          title="Groups"
        />
        <Statistic
          Icon={<MdForum className="icon" />}
          number={features.length}
          title="Features"
        />
        <Statistic
          Icon={<AiOutlineComment className="icon" />}
          number="15"
          title="Topics"
        />
      </div>
    </div>
  );
}

export default Statistics;
