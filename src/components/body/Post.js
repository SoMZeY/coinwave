import React, { useState } from "react";

import Card from "../UI/Card";
import "./Post.css";
import like_icon from "../assets/icons/like.png";
import comments_icon from "../assets/icons/comment.png";

const Post = (props) => {
  return (
    <div className="post">
      <Card>
        <div className="post-header">
          <p className="post-author">Posted by {props.user}</p>
          <p className="post-title">{props.title}</p>
        </div>
        <p className="post-text">{props.text}</p>
        <div className="post-icons">
          <img src={like_icon}></img>
          <p>{props.likes}</p>
          <img src={comments_icon}></img>
          <p>{props.comments}</p>
        </div>
      </Card>
    </div>
  );
};

export default Post;
