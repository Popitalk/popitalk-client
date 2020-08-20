import React from "react";
import Linkify from "react-linkify";

export default function MessageContent({ message, incrementLoadedMessages }) {
  let toRender = () => {
    const img = (
      <img
        className="w-3/5"
        src={JSON.parse(message.content).images.downsized_medium}
        alt={JSON.parse(message.content).title}
        // counts the message when it loads
        onLoad={
          // checks if message is accepted by server,
          // so messages wouldnt get counted twice or more times
          !message.status
            ? () => {
                incrementLoadedMessages();
              }
            : undefined
        }
      />
    );
    return img;
  };
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
        toRender()
      ) : (
        <Linkify>{message.content}</Linkify>
      )}
    </span>
  );
}
