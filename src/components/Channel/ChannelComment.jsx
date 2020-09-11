import React from "react";
import AvatarIcon from "../Controls/AvatarIcon";
import ToggleIcon from "../Controls/ToggleIcon";
import { openProfileModal } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function ChannelComment({
  id,
  name,
  avatar,
  authorId,
  timeFromPost,
  text,
  liked,
  likes,
  toggleLike
}) {
  // Opening profile modal
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row bg-secondaryBackground p-2">
      <aside
        className="flex-shrink-0 pr-2"
        onClick={() => dispatch(openProfileModal(authorId))}
        role="button"
      >
        <AvatarIcon
          avatar={avatar}
          name={name}
          className="img w-10 h-10 rounded-circle flex transition transform ease-in-out hover:scale-110 duration-100"
        />
      </aside>
      <article className="flex-shrink flex flex-col mr-2 w-full">
        <main>
          <span
            className="font-bold text-sm pr-1"
            onClick={() => dispatch(openProfileModal(authorId))}
            role="button"
          >
            {name}{" "}
          </span>
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
      <aside className="flex items-center flex-shrink-0 text-secondaryText">
        <ToggleIcon
          icons={{ default: ["far", "heart"], toggle: ["fa", "heart"] }}
          className={{ icon: "text-lg focus:outline-none" }}
          status={liked}
          toggleStatus={stat => toggleLike(id, "comment", stat)}
        />
        <span className="text-sm font-bold pl-1">{likes ? likes : ""}</span>
      </aside>
    </div>
  );
}
