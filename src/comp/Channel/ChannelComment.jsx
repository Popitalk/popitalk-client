import React from "react";
import AvatarIcon from "../Controls/AvatarIcon";
import ToggleIcon from "../Controls/ToggleIcon";

export default function ChannelComment({
  id,
  name,
  avatar,
  timeFromPost,
  text,
  liked,
  likes,
  toggleLike
}) {
  return (
    <div className="flex flex-row bg-secondaryBackground p-2">
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
          <span
            className={`text-sm ${
              text.split(" ").length > 1 ? "break-words" : "break-all"
            }`}
          >
            {text}
          </span>
        </main>
        <span className="text-xs text-secondaryText">{timeFromPost}</span>
      </article>
      <aside className="flex items-baseline flex-shrink-0 text-secondaryText">
        <ToggleIcon
          icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
          colors={{
            default: "text-secondaryText",
            toggle: "text-notificationsColor"
          }}
          className={{ icon: "text-lg focus:outline-none" }}
          status={liked}
          toggleStatus={stat => toggleLike(id, "comment", stat)}
        />
        <span className="text-sm font-bold pl-1">{likes ? likes : ""}</span>
      </aside>
    </div>
  );
}
