import React from "react";
import ForumHeader from "../ForumHeader";
import CreatePost from "../CreatePost";
import Posts from "../Posts";
import "./Forum.css";

export default function Forum() {
  return (
    <div className="Forum--container">
      <ForumHeader />
      <CreatePost />
      <Posts />
    </div>
  );
}
