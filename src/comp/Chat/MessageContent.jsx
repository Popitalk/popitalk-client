import React from "react";

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
      {message.content.gif ? (
        <img
          className="w-3/5"
          src={message.content.images.downsized_medium}
          alt={message.content.title}
        />
      ) : (
        message.content
      )}
      {message.upload && (
        <img src={message.upload} alt="Message" className="mt-2 rounded-lg" />
      )}
    </span>
  );
}
