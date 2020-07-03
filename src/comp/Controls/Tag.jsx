import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Tag({ id, name, handleCancel }) {
  return (
    <span
      className="bg-secondaryBackground rounded-lg px-2 py-1 inline-flex items-center space-x-2 shadow-search"
      role="button"
      onClick={() => handleCancel(id)}
    >
      <span className="text-sm rainbow-text font-semibold select-none">
        {name}
      </span>
      <FontAwesomeIcon
        icon={faTimes}
        className="text-xs text-secondaryText self-center"
      />
    </span>
  );
}
