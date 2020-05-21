import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import RoomIcon from "./RoomIcon";
import AvatarIcon from "./InfoCards/AvatarIcon";
import ChannelComment from "./ChannelComment";
import NewChannelComment from "./NewChannelComment";
import classnames from "classnames";
import ToggleIcon from "./ToggleIcon";
import YoutubeLogo from "../assets/youtube-logo.png";
import sources from "./videoSourceImages";
import Input from "./Input";

export default function VideoSearch({
  id,
  name,
  avatar,
  timeFromPost,
  text,
  comments,
  liked
}) {
  const [showNewComment, setShowNewComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleComment = () => {
    setShowNewComment(!showNewComment);
  };
  console.log("sources", sources);
  return (
    <div className="bg-secondaryBackground p-2">
      <div>
        {/* <input type="text" placeholder="Search for a video to watch next" className="w-full rounded-lg"/>
        <input type="submit"></input> */}
        <Input
          variant="video"
          size="lg"
          placeholder="Search for a video to watch next"
          videoSource="Youtube"
        />
      </div>
      <div className="flex">
        {sources.map((img, idx) => {
          return (
            <button
              key={idx}
              className="flex justify-center align-middle mx-1 bg-primaryBackground h-10 w-10 rounded-full"
            >
              <img src={img.icon} alt={img.source} className="h-6 w-6" />
            </button>
          );
        })}
      </div>
    </div>
  );
  //   <textarea
  //   type="text"
  //   placeholder="Post something..."
  //   className="rounded-lg pl-3 p-2 w-full shadow"
  //   rows={1}
  //   onChange={handleChange}
  // />
}
