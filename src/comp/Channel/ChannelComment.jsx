import React from "react";
import AvatarIcon from "../InfoCards/AvatarIcon";
import ToggleIcon from "../ToggleIcon";

export default function ChannelPost({
  id,
  name,
  avatar,
  timeFromPost,
  text,
  liked,
  likes,
  setLikes
}) {
  return (
    <div className="flex flex-row bg-secondaryBackground p-1">
      <aside className="flex-shrink-0 pr-2">
        <AvatarIcon
          avatar={avatar}
          name={name}
          className="img w-10 h-10 rounded-circle"
        />
      </aside>
      <article className="flex-shrink flex flex-col mr-2 w-full">
        <main>
          <span className="font-bold text-sm pr-1">{name} </span>
          <span className="text-sm">{text}</span>
        </main>
        <span className="text-xs pt-1 text-secondaryText">{timeFromPost}</span>
      </article>
      <aside className="flex items-baseline flex-shrink-0 text-secondaryText">
        <ToggleIcon
          icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
          colors={{
            default: "text-secondaryText",
            toggle: "text-notificationsColor"
          }}
          className={{ icon: "text-lg" }}
          status={liked}
        />
        <span className="text-sm font-bold pl-1">{likes ? likes : ""}</span>
      </aside>
    </div>
  );
}
