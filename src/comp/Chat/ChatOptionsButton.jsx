import React, { Fragment, useState } from "react";
import Button from "../Controls/Button";
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
          <Button
            styleNone
            icon="ellipsis-v"
            styleNoneIconClassName="text-secondaryText"
            className="opacity-0 chat-options-button w-8 px-0 space-x-2 self-center mx-1"
            onClick={() => {
              setOptionsClosed(false);
              setTimeout(() => setOptionsClosed(true), 3000);
            }}
          />
        ) : null}
      </Fragment>
    );
  } else {
    return (
      <div className="w-10 h-4 px-0 space-x-2 rounded-full bg-gradient-br-cancel flex flex-row justify-center self-center mx-2">
        {
          // New feature, optional chaining. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
          handleResend && conditions.messageRejected ? (
            <Button
              styleNone
              icon="redo-alt"
              styleNoneIconClassName="text-xs text-tertiaryText"
              className="focus:outline-none flex items-center"
              onClick={() => handleResend(message.content)}
            />
          ) : (
            <></>
          )
        }
        {handleDelete &&
        (conditions.messageRejected || conditions.messageAccepted) ? (
          <Button
            styleNone
            icon="times"
            styleNoneIconClassName="text-sm text-tertiaryText"
            className="flex items-center"
            onClick={() =>
              handleDelete({ type: message?.type, id: message.id })
            }
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
