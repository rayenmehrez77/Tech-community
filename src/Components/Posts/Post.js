import React from "react";
import "./Post.css";

function Post({ title, desc, img, timestamp, link }) {
  return (
    <div className="post">
      <img src={img} alt={title} />
      <div className="post__info">
        <h4>{title}</h4>
        <span>{timestamp}</span>
        <p>
          {desc}...
          <a href={link} target="_blank" rel="noreferrer">
            Read more
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Post;
