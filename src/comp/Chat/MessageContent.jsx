import React from "react";
import Linkify from "react-linkify";

export default function MessageContent({ message }) {
  return (
    <span
      className={
        //Break-all, because if we break by word, chat panel layout is broken by input withouth spaces.
        `w-full break-all text-sm text-justify py-2px ${
          message?.type?.toLowerCase() === "pending" ||
          message?.type?.toLowerCase() === "rejected"
            ? "text-secondaryText"
            : "text-primaryText"
        }`
      }
    >
      {message.upload === "gif" ? (
        <img
          className="w-3/5"
          src={JSON.parse(message.content).images.downsized_medium}
          alt={JSON.parse(message.content).title}
        />
      ) : (
        <Linkify>{message.content}</Linkify>
      )}
    </span>
  );
}
