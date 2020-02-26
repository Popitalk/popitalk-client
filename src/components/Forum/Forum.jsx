import React from "react";
import ForumHeader from "../ForumHeader";
import CreatePost from "../CreatePost";
import Posts from "../Posts";
import "./Forum.css";

export default function Forum({ privateAndNotMember }) {
  return (
    <div className="Forum--container">
      <ForumHeader />
      {!privateAndNotMember && (
        <>
          <CreatePost />
          <Posts />
        </>
      )}
    </div>
  );
}
