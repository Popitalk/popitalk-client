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
  // deletedMessageId === message.id && deletedMessageApiLoading
  return (
    <>
      {conditions.isMyMessage || conditions.isAdminOfChannel ? (
        <PopupMenu
          options={[
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
          ]}
          type="message"
          messageId={message.id}
          disabled={deletedMessageApiLoading}
        />
      ) : null}
    </>
  );
}
