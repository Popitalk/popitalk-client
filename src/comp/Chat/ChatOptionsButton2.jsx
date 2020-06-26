import React from "react";
import PopupMenu from "../PopupMenu";
import "./ChatOptionsButton.css";

export default function ChatOptionsButton2({
  message,
  channel,
  ownId,
  deletedMessageApiLoading
}) {
  const conditions = {
    isMyMessage: message.userId === ownId,
    isAdminOfChannel:
      channel?.type === "channel" && channel.admins?.includes(ownId)
  };
  const options = [
    {
      name: "Delete",
      handler: () => console.log("Message Deleted"),
      danger: false
    },
    {
      name: "Resend",
      handler: () => console.log("Message Deleted"),
      danger: false
    }
  ];
  // deletedMessageId === message.id && deletedMessageApiLoading
  // Returns the button only if you are the admin of the channel OR it is your own message.
  return (
    <>
      {conditions.isMyMessage || conditions.isAdminOfChannel ? (
        <div className="opacity-0 chat-options-button w-8 px-0 space-x-2 self-center mx-1 focus:outline-none">
          <PopupMenu
            options={options}
            type="message"
            messageId={message.id}
            disabled={deletedMessageApiLoading}
          />
        </div>
      ) : null}
    </>
  );
}
