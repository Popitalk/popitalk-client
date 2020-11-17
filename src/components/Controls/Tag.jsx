import React from "react";
import Button from "../Controls/Button";

export default function Tag({ id, name, handleCancel }) {
  return (
    <Button
      styleNone
      icon="times"
      styleNoneIconClassName="text-xs text-copy-secondary"
      styleNoneContent={name}
      styleNoneContentClassName="text-sm rainbow-text font-semibold"
      className="bg-background-secondary rounded-lg px-2 py-1 inline-flex items-center space-x-2 shadow-search"
      onClick={() => handleCancel(id)}
    />
  );
}
