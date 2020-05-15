import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SearchRecommendation({ name, handleCancel }) {
  return (
    <span className="bg-secondaryBackground rounded-xl px-3 py-1 inline-flex items-center space-x-2 shadow-suggestions">
      <span className="text-base rainbow-text font-semibold">{name}</span>
      <span role="button" onClick={handleCancel}>
        <FontAwesomeIcon
          icon={faTimes}
          className="text-sm text-secondaryText self-center"
        />
      </span>
    </span>
  );
}
