import React from "react";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import CreatePost from "./components/body/CreatePost";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CreatePost></CreatePost>
    </div>
  );
}

export default App;
