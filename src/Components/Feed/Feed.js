import React, { useState } from "react";
import "./Feed.css";
import Comment from "../Activity/Comment";
import { posts } from "../../AllData/PostsData";
import { features } from "../../AllData/FeaturesData";
import Post from "../Posts/Post";
import Feature from "../Features/Feature";

function Feed({ comments }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="feed">
      <div className="feed__imgBox">
        <h5>Welcome to the community!</h5>
      </div>
      <div className="feed__comments">
        <h4>Latest Activity</h4>

        {showMore
          ? comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })
          : comments.map((comment, index) => {
              return (
                index < 3 && <Comment key={comment.id} comment={comment} />
              );
            })}
        <button className="loadMore" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="feed__posts">
        <h4>Latest Posts</h4>
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>

      <div className="feed__features">
        <h4>The Features</h4>
        <div className="feed__featuresList">
          {features.map((feature) => {
            return <Feature key={feature.id} {...feature} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
