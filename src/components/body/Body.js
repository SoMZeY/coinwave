import React from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import "./Body.css";

const dummyPosts = [
  {
    user: "Cosmosity",
    title: "Bitcoin is overhyped",
    text: "LoremiIrure veniam occaecat aliqua proident eiusmod quis velit tempor. In sunt dolore dolore magna nostrud ipsum voluptate consequat culpa sunt anim proident magna. Nostrud et et eu enim ad pariatur eiusmod officia amet in.",
  },
  {
    user: "Somzey",
    title: "Is Web3 really the future?",
    text: "Magna laboris et Lorem eu cupidatat do anim sint est irure.",
  },
  {
    user: "Fan338",
    title: "New Solidity framework review",
    text: "Sit mollit in dolore id exercitation adipisicing exercitation culpa nostrud sint dolore occaecat.Ex reprehenderit laboris occaecat do excepteur dolore eiusmod sit anim.",
  },
];

const Body = (props) => {
  return (
    <div className="body">
      <CreatePost></CreatePost>
      <ul className="post-list">
        {dummyPosts.map((postData) => {
          return (
            <li className="post">
              <Post
                user={postData.user}
                title={postData.title}
                text={postData.text}
              ></Post>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
