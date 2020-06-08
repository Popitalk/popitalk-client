import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatMessage({ message, handleResend, handleDelete }) {
  return (
    <div className="flex flex-col my-2">
      <div className="flex items-center space-x-2 text-xs">
        <img
          className="w-8 h-8 rounded-full"
          src={message.avatar}
          alt="Avatar"
        />
        <span className="font-bold">{message.name}</span>
        <span className="text-secondaryText">
          {message.date.toLocaleString()}
        </span>
      </div>
      <div className="grid mt-2 mb-4 grid-cols-chat">
        <span className="flex justify-center">
          <span
            className={`w-1 rounded-lg ${
              message.me ? "bg-highlightText" : "bg-secondaryBackground"
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
        {message.me && (handleResend || handleDelete) ? (
          <span className="mx-4">
            <div className="px-2 space-x-2 rounded-full bg-gradient-br-cancel flex flex-row justify-center">
              {handleResend ? (
                <button
                  className="focus:outline-none flex items-center py-2"
                  onClick={() => handleResend(message)}
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
                  className="focus:outline-none flex items-center py-2"
                  onClick={() => handleDelete(message.id)}
                >
                  <FontAwesomeIcon
                    size="xs"
                    icon="times"
                    className="text-tertiaryText"
                  />
                </button>
              ) : (
                <></>
              )}
            </div>
          </span>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
