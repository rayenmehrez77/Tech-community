import React from "react";
import "./Comment.css";
import { BiTimeFive } from "react-icons/bi";

function Comment({ comment }) {
  const { name, timestamp, body } = comment;

  return (
    <div className="comment">
      <img
        src="https://i.pinimg.com/originals/b2/81/fb/b281fb30e6de8e68aba649a94d6f24d6.jpg"
        alt="community background"
      />
      <div className="comment__info">
        <h3>
          {name}
          <span> posted an update in</span> The Social Network
        </h3>
        <div className="comment__timestamp">
          <BiTimeFive className="comment__timestampIcon" />
          <span>{timestamp}</span>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Comment;
