import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatOptionsButton.css";

export default function ChatOptionsButton({
  conditions,
  handleResend,
  handleDelete,
  message
}) {
  const [optionsClosed, setOptionsClosed] = useState(true);
  if (optionsClosed) {
    return (
      <Fragment>
        {conditions.displayButton ? (
          <button
            className="opacity-0 chat-options-button w-8 px-0 space-x-2 self-center mx-1 focus:outline-none"
            onClick={() => {
              setOptionsClosed(false);
              setTimeout(() => setOptionsClosed(true), 3000);
            }}
          >
            <FontAwesomeIcon
              icon="ellipsis-v"
              className={"text-secondaryText"}
            />
          </button>
        ) : null}
      </Fragment>
    );
  } else {
    return (
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
    );
  }
}
