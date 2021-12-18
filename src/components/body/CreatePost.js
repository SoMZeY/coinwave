import React, { useState } from "react";

import Card from "../UI/Card";
import "../UI/Button.css";
import "./CreatePost.css";

const CreatePost = ({ onCreate }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (postTitle.trim() && postText.trim()) {
      onCreate(postTitle, postText);
      setPostText("");
      setPostTitle("");
    }
  };

  console.log(postTitle, postText);

  return (
    <div className="create-post">
      <Card className="create-post-card">
        <p className="create-post-title">Create Post</p>
        <form className="create-post-form">
          <input
            placeholder="Title"
            onChange={(event) => setPostTitle(event.target.value)}
          ></input>
          <textarea
            placeholder="Text"
            onChange={(event) => setPostText(event.target.value)}
          ></textarea>
          <button className="button" onClick={submitHandler}>
            Post
          </button>
        </form>
      </Card>
    </div>
  );
};

export default CreatePost;
