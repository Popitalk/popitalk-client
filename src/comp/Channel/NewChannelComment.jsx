import React, { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../VideoStatus.css";
import RoomIcon from "../RoomIcon";
import AvatarIcon from "../InfoCards/AvatarIcon";

export default function NewChannelComment({
  postId,
  handleUploadImg,
  handleEmot,
  saveComment
}) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    saveComment(value, postId);
    console.log("submit");
  };

  const handleChange = e => {
    e.target.style.height = "2.4rem";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
    setValue(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-center bg-secondaryBackground content-center py-2"
    >
      <textarea
        type="text"
        placeholder="Add a comment"
        className="rounded-lg mx-2 w-full px-6 py-2 h-10 shadow text-sm"
        row={1}
        value={value}
        maxLength={120}
        onChange={handleChange}
        autoFocus
      />
      <input
        type="submit"
        value="Post"
        className="mx-2 bg-transparent text-highlightText font-bold mr-3"
      />
    </form>
  );
}
