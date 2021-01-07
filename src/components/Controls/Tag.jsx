import React from "react";
import Button from "../Controls/Button";

export default function Tag({ tag, handleCancel }) {
  return (
    <Button
      styleNone
      icon="times"
      styleNoneIconClassName="text-xs text-copy-secondary"
      styleNoneContent={tag.name}
      styleNoneContentClassName="text-xs rainbow-text font-semibold"
      className="bg-background-secondary rounded-lg px-2 py-1 items-center space-x-2 shadow-search"
      onClick={() => handleCancel(tag)}
    />
  );
}
