import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatMessage({
  message,
  handleResend,
  handleDelete,
  defaultAvatar
}) {
  return (
    <div className="flex flex-col mt-2 mx-2">
      <div className="flex items-center space-x-2 text-xs ml-1">
        <img
          className="w-8 h-8 rounded-full"
          src={message.author.avatar || defaultAvatar}
          alt={message.author.username}
        />
        <span className="font-bold">{message.author.username}</span>
        <span className="text-secondaryText">
          {message.createdAt.toLocaleString()}
        </span>
      </div>
      <div className="grid mt-2 mb-4 grid-cols-chat">
        <span className="flex justify-center">
          <span
            className={`w-1 rounded-lg ${
              message.author.username === message.me
                ? "bg-highlightText"
                : "bg-secondaryBackground"
            }`}
          ></span>
        </span>
        <span className="w-full text-sm text-justify text-primaryText">
          {message.content}
          {message.upload && (
            <img
              src={message.upload}
              alt="Message"
              className="mt-2 rounded-lg"
            />
          )}
        </span>
        {message.author.username === message.me &&
        (handleResend || handleDelete) ? (
          <div className="w-3/5 px-0 space-x-2 rounded-full bg-gradient-br-cancel flex flex-row justify-center">
            {handleResend ? (
              <button
                className="focus:outline-none flex items-center py-1"
                onClick={() => handleResend(message.content)}
              >
                <FontAwesomeIcon
                  size="xs"
                  icon="redo-alt"
                  className="text-tertiaryText"
                />
              </button>
            ) : (
              <></>
            )}
            {handleDelete ? (
              <button
                className="focus:outline-none flex items-center py-1"
                onClick={() => handleDelete(message.id)}
              >
                <FontAwesomeIcon
                  size="sm"
                  icon="times"
                  className="text-tertiaryText"
                />
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
