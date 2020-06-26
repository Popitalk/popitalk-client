import React from "react";
import ChatMessage from "../Chat/ChatMessage";
import Button from "../Button";

export default function DeleteMessageModal({
  message,
  ownId,
  defaultAvatar,
  handleCancel,
  handleDelete
}) {
  return (
    <div className="px-8 py-4">
      <p>Delete message</p>
      <p>Are you sure you want to delete this message?</p>
      <ChatMessage
        message={message}
        ownId={ownId}
        defaultAvatar={defaultAvatar}
      />
      <div className="flex justify-end items-center">
        <span
          role="button"
          className="text-secondaryText text-sm font-semibold pr-8"
          onClick={handleCancel}
        >
          Cancel
        </span>
        <Button
          background="cancel"
          shape="pill"
          size="sm"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
