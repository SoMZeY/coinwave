import React, { useState } from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import "./Body.css";

const Body = (props) => {
  const [posts, setPosts] = useState([
    {
      user: "Cosmosity",
      title: "Bitcoin is overhyped",
      text: "LoremiIrure veniam occaecat aliqua proident eiusmod quis velit tempor. In sunt dolore dolore magna nostrud ipsum voluptate consequat culpa sunt anim proident magna. Nostrud et et eu enim ad pariatur eiusmod officia amet in.",
      likes: 278,
      comments: 218,
    },
    {
      user: "Somzey",
      title: "Is Web3 really the future?",
      text: "Magna laboris et Lorem eu cupidatat do anim sint est irure.",
      likes: 111,
      comments: 76,
    },
    {
      user: "Fan338",
      title: "New Solidity framework review",
      text: "Sit mollit in dolore id exercitation adipisicing exercitation culpa nostrud sint dolore occaecat.Ex reprehenderit laboris occaecat do excepteur dolore eiusmod sit anim.",
      likes: 27,
      comments: 16,
    },
  ]);

  console.log(posts);

  const createPost = (title, text) => {
    setPosts(posts.concat([{ user: "Current", title, text }]));
  };

  return (
    <div className="body">
      <CreatePost onCreate={createPost}></CreatePost>
      <ul className="post-list">
        {posts.map((postData) => {
          return (
            <li className="post">
              <Post
                user={postData.user}
                title={postData.title}
                text={postData.text}
                likes={postData.likes}
                comments={postData.comments}
              ></Post>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
