import React from "react";
import { useSelector } from "react-redux";

import AvatarIcon from "../Controls/AvatarIcon";
import ToggleIcon from "../Controls/ToggleIcon";
import { formatDistanceToNow } from "../../helpers/datefns";

export default function Comment({
  id,
  username,
  avatar,
  authorId,
  createdAt,
  content,
  liked,
  likeCount,
  toggleLike,
  openProfileModal
}) {
  const { loggedIn } = useSelector(state => state.general);
  const timeAgo = formatDistanceToNow(new Date(createdAt));

  return (
    <div className="flex flex-row bg-background-secondary p-2">
      <aside
        className="flex-shrink-0 pr-2"
        onClick={() => {
          if (loggedIn) {
            openProfileModal(authorId);
          }
        }}
        role="button"
      >
        <AvatarIcon
          avatar={avatar}
          name={username}
          className="img w-10 h-10 rounded-circle flex transition transform ease-in-out hover:scale-110 duration-100"
        />
      </aside>
      <article className="flex-shrink flex flex-col mr-2 w-full">
        <main>
          <span
            className="font-bold text-sm pr-1 text-copy-primary"
            onClick={() => {
              if (loggedIn) {
                openProfileModal(authorId);
              }
            }}
            role="button"
          >
            {username}{" "}
          </span>
          <span
            className={`text-sm text-copy-primary ${
              content.split(" ").length > 1 ? "break-words" : "break-all"
            }`}
          >
            {content}
          </span>
        </main>
        <span className="text-xs text-copy-secondary">{timeAgo}</span>
      </article>
      <aside className="flex items-center flex-shrink-0 text-copy-secondary">
        <ToggleIcon
          icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
          className={{ icon: "text-lg focus:outline-none" }}
          status={liked}
          toggleStatus={stat => toggleLike(id, stat)}
        />
        <span className="text-sm font-bold pl-1">
          {likeCount ? likeCount : ""}
        </span>
      </aside>
    </div>
  );
}
