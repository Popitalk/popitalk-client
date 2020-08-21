import React from "react";
import Linkify from "react-linkify";

export default function MessageContent({ message, incrementLoadedMessages }) {
  let toRender = () => {
    const img = (
      // Gifs have to be of fixed height, if they're of fixed width and height
      // is dynamic, chat container can not precalculate the height of it, and we cant scroll accordingly.
      <img
        className="h-32"
        src={JSON.parse(message.content).images.fixed_height}
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
