import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormatter from "../../util/dateFormatter";

export default function ChatMessage({
  message,
  previousMessage,
  handleResend,
  handleDelete,
  defaultAvatar
}) {
  const [isClicked, setIsClicked] = useState(false);
  // Variable that controls the interval between messages fusing
  const messageFuseTime = 30000;
  const conditions = {
    // Checks if a message is the first one, or messageFuseTime is
    //less than the time that passed between previous or current massage.
    unfusedMessage:
      !previousMessage ||
      (new Date(message.createdAt) - new Date(previousMessage.createdAt) >
        messageFuseTime &&
        message.author.id === previousMessage.author.id),
    // Checks if you are the author of the message,
    // if handleresend and delete methods are defined
    // if message type is other than accepted.
    displayButton:
      message.author.username === message.me &&
      (handleResend || handleDelete) &&
      (message?.type === void undefined ||
        message?.type?.toLowerCase() === "rejected"),
    // Check if message is of type 'rejected'
    messageAccepted: message?.type === void undefined,
    messageRejected: message?.type?.toLowerCase() === "rejected",
    messagePending: message?.type?.toLowerCase() === "pending"
  };

  if (conditions.unfusedMessage) {
    return (
      <div className="flex flex-col mt-6 mx-2">
        <div className="flex items-center space-x-2 text-xs ml-1">
          <img
            className="w-8 h-8 rounded-full"
            src={message.author.avatar || defaultAvatar}
            alt={message.author.username}
          />
          <span className="font-bold">{message.author.username}</span>
          <span className="text-secondaryText">
            {dateFormatter(new Date(message.createdAt))}
          </span>
        </div>
        <div className="flex mt-2 flex-around bg:primaryBackground hover:bg-secondaryBackground rounded-xl cursor-pointer">
          <span className="flex justify-center">
            <span
              className={`w-1 rounded-t-lg mx-5 ${
                message.author.username === message.me
                  ? "bg-highlightText"
                  : "bg-secondaryBackground"
              }`}
            ></span>
          </span>
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
            {message.content}
            {message.upload && (
              <img
                src={message.upload}
                alt="Message"
                className="mt-2 rounded-lg"
              />
            )}
          </span>
          {conditions.displayButton ? (
            <div className="w-10 h-4 px-0 space-x-2 rounded-full bg-gradient-br-cancel flex flex-row justify-center self-center mx-2">
              {
                // New feature, optional chaining. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
                handleResend && conditions.messageRejected ? (
                  <button
                    className="focus:outline-none flex items-center"
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
                )
              }
              {handleDelete &&
              (conditions.messageRejected || conditions.messageAccepted) ? (
                <button
                  className="focus:outline-none flex items-center"
                  onClick={() =>
                    handleDelete({ type: message?.type, id: message.id })
                  }
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
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div
        role="button"
        onClick={() => setIsClicked(!isClicked)}
        className="flex flex-col mx-2 bg-primaryBackground hover:bg-secondaryBackground rounded-xl"
      >
        {isClicked ? (
          <div className="flex items-center space-x-2 text-xs ml-3 p-1">
            <span className="text-secondaryText">
              {dateFormatter(new Date(message.createdAt))}
            </span>
          </div>
        ) : null}
        <div className="flex flex-around">
          <span className="flex justify-center">
            <span
              className={`w-1 mx-5 ${
                message.author.username === message.me
                  ? "bg-highlightText"
                  : "bg-secondaryBackground"
              }`}
            ></span>
          </span>
          <span
            className={
              //Break-all, because if we break by word, chat panel layout is broken by input withouth spaces.
              `w-full break-all text-sm text-justify p-2px ${
                conditions.messagePending || conditions.messageRejected
                  ? "text-secondaryText"
                  : "text-primaryText"
              }`
            }
          >
            {message.content}
            {message.upload && (
              <img
                src={message.upload}
                alt="Message"
                className="mt-2 rounded-lg"
              />
            )}
          </span>
          {conditions.displayButton ? (
            <div className="w-10 h-4 px-0 space-x-2 rounded-full bg-gradient-br-cancel flex flex-row justify-center self-center mx-2">
              {handleResend && conditions.messageRejected ? (
                <button
                  className="focus:outline-none flex items-center"
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
              {handleDelete &&
              (conditions.messageRejected || conditions.messageAccepted) ? (
                <button
                  className="focus:outline-none flex items-center"
                  onClick={() =>
                    handleDelete({ type: message?.type, id: message.id })
                  }
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
          ) : null}
        </div>
      </div>
    );
  }
}
