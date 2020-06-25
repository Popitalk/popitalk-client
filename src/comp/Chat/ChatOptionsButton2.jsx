import React from "react";
import PopupMenu from "../PopupMenu";

export default function ChatOptionsButton2({
  message,
  channel,
  ownId,
  deletedMessageApiLoading,
  deletedMessageId,
  Spinner
}) {
  return (
    <>
      {(message.userId === ownId ||
        (channel?.type === "channel" && channel.admins?.includes(ownId))) &&
        (deletedMessageId === message.id && deletedMessageApiLoading ? (
          <Spinner />
        ) : (
          <PopupMenu
            options={[]}
            type="message"
            messageId={message.id}
            disabled={deletedMessageApiLoading}
          />
        ))}
    </>
  );
}
