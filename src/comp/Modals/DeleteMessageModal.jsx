import React from "react";
import ChatMessage from "../ChatMessage";
import Button from "../Button";
import Text from "../Text";

export default function DeleteMessageModal({
  message,
  handleCancel,
  handleDelete
}) {
  return (
    <div className="px-8 py-4">
      <Text variant="text1">Delete message</Text>
      <Text variant="small1">
        Are you sure you want to delete this message?
      </Text>
      <ChatMessage message={message} />
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
          onClick={() => handleDelete(message.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
