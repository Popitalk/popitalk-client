import React from "react";
import Embeddify from "./Embeddify";

export default function MessageContent({ message }) {
  return (
    <div
      className={`w-100 sm:w-64 break-words text-sm py-1 ${
        message?.type?.toLowerCase() === "pending" ||
        message?.type?.toLowerCase() === "rejected"
          ? "text-copy-secondary"
          : "text-copy-primary"
      }`}
    >
      {message.upload === "gif" ? (
        // Gifs have to be of fixed height, if they're of fixed width and height
        // is dynamic, chat container can not precalculate the height of it, and we cant scroll accordingly.
        <Embeddify text={message.content} />
      ) : message.upload === "system" ? (
        <div className="w-68 h-20 rounded-lg shadow-xs my-2 p-2px bg-gradient-tr-primary break-words select-none cursor-pointer">
          <div className="flex flex-col justify-center items-center w-full h-full rounded-lg bg-background-primary space-y-1">
            <p className="animate-bounce text-copy-highlight text-xs">
              {message.content}
            </p>
            <p className="text-copy-secondary text-xs">{message.createdAt}</p>
          </div>
        </div>
      ) : (
        <Embeddify text={message.content} />
      )}
    </div>
  );
}
