import React from "react";
import "./ReplyCard.css";
import { formatDistanceToNow } from "date-fns";

export default function ReplyCard({
  username,
  avatar,
  createdAt,
  reply,
  likes,
  likeHandler
}) {
  return (
    <div className="ReplyCard--container">
      <img src={avatar} alt={`${username}'s avatar`} />
      <div>
        <p className="ReplyCard--reply">
          <span>{username}</span> {reply}
        </p>
        <p className="ReplyCard--date">
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true
          })}
        </p>
      </div>
      <button type="button">
        <i className="far fa-heart fa-lg  ReplyCard--buttons--visible" />
        <i className="fas fa-heart fa-lg ReplyCard--buttons--hidden" />
      </button>
    </div>
  );
}
