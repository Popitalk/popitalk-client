import React from "react";

export default function MessageHighlightSpan({ ownId, userId, status }) {
  return (
    <span
      className={`w-1 mx-3 ${
        userId !== ownId || status === "rejected" || status === "pending"
          ? "bg-secondaryBackground"
          : "bg-highlightText"
      }`}
    ></span>
  );
}
