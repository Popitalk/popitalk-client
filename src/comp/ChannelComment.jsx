import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VideoStatus.css";
import AvatarIcon from "./InfoCards/AvatarIcon";

export default function ChannelPost({
  id,
  name,
  avatar,
  timeFromPost,
  text,
  likes,
  setLikes
}) {
  return (
    <div className="flex flex-row bg-secondaryBackground p-3">
      <aside className="flex-shrink-0 pr-2">
        <AvatarIcon
          avatar={avatar}
          name={name}
          className="img w-10 h-10 rounded-circle"
        />
      </aside>
      <article className="flex-shrink flex flex-col mr-2">
        <main>
          <span className="font-bold pr-1">{name} </span>
          <span>{text}</span>
        </main>
        <span className="text-xs pt-1 text-secondaryText">{timeFromPost}</span>
      </article>
      <aside className="flex items-baseline flex-shrink-0 text-secondaryText">
        <button className="text-lg">
          <FontAwesomeIcon icon={["far", "heart"]} />
        </button>
        <span className="text-sm font-bold pl-1">{likes ? likes : ""}</span>
      </aside>
    </div>
  );
}
