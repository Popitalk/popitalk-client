import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatMessage({ message, hideButtons }) {
  return (
    <div className="flex flex-col my-6">
      <div className="flex items-center space-x-2 text-xs">
        <img
          className="w-10 h-10 rounded-full"
          src={message.avatar}
          alt="Avatar"
        />
        <span className="font-bold">{message.name}</span>
        <span className="text-secondaryText">
          {message.date.toLocaleString()}
        </span>
      </div>
      <div className="grid my-3 grid-cols-chat">
        <span className="flex justify-center">
          <span
            className={`w-1 rounded-lg ${
              message.me ? "bg-highlightText" : "bg-tertiaryBackground"
            }`}
          ></span>
        </span>
        <span className="w-full text-sm text-justify text-primaryText">
          {message.message}
          {message.image && (
            <img
              src={message.image}
              alt="Message"
              className="mt-2 rounded-lg"
            />
          )}
        </span>
        {message.me && !hideButtons ? (
          <span className="mx-4">
            <div className="px-2 space-x-2 rounded-full bg-gradient-br-cancel flex flex-row justify-center">
              <button className="focus:outline-none flex items-center py-2">
                <FontAwesomeIcon
                  size="xs"
                  icon="redo-alt"
                  className="text-tertiaryText"
                />
              </button>
              <button className="focus:outline-none flex items-center py-2">
                <FontAwesomeIcon
                  size="xs"
                  icon="times"
                  className="text-tertiaryText"
                />
              </button>
            </div>
          </span>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
