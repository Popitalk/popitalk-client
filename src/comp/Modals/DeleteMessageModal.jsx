import React from "react";
import ChatMessage from "../Chat/ChatMessage";
import Button from "../Controls/Button";

export default function DeleteMessageModal({
  message,
  ownId,
  defaultAvatar,
  handleCancel,
  handleDelete
}) {
  return (
    <div className="px-8 py-6 space-y-2">
      <p className="text-lg font-bold text-primaryText">Delete message</p>
      <p className="text-sm text-secondaryText pb-4">
        Are you sure you want to delete this message?
      </p>
      <div className="pointer-events-none">
        <ChatMessage
          message={message}
          ownId={ownId}
          defaultAvatar={defaultAvatar}
        />
      </div>
      <div className="flex justify-end items-center pt-8">
        <span
          role="button"
          className="text-secondaryText text-md pr-8"
          onClick={handleCancel}
        >
          Cancel
        </span>
        <Button background="cancel" size="md" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
