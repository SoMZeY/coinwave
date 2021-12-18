import React from "react";

import Card from "../UI/Card";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <Card>
        <div className="post-header">
          <p className="post-author">Posted by {props.user}</p>
          <p className="post-title">{props.title}</p>
        </div>
        <p className="post-text">{props.text}</p>
      </Card>
    </div>
  );
};

export default Post;
