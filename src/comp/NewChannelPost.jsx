import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function NewChannelPost({
  handleUploadImg,
  handleEmot,
  handleSubmit,
  className
}) {
  const remToPixel = (rootFontSizePx = 16, rem) => {
    return rem * rootFontSizePx;
  };
  const handleChange = e => {
    e.target.style.height = "2rem";
    e.target.style.height = `${Math.min(e.target.scrollHeight + 2, 168)}px`;
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row justify-center bg-secondaryBackground content-center py-2 ${className}`}
    >
      <button className="text-highlightText text-2xl mx-4" onClick={handleEmot}>
        <FontAwesomeIcon icon={["far", "smile"]} />
      </button>
      <textarea
        type="text"
        placeholder="Post something..."
        className="rounded-lg pl-3 p-2 w-full shadow"
        rows={1}
        onChange={handleChange}
      />
      <button
        className="text-highlightText text-2xl ml-4"
        onClick={handleUploadImg}
      >
        <FontAwesomeIcon icon={["fa", "image"]} />
      </button>
      <input
        type="submit"
        value="Send"
        className="mx-4 bg-transparent text-highlightText font-bold"
      />
    </form>
  );
}
