import React from "react";

export default function MessageHighlightSpan({ ownId, userId }) {
  return (
    <span
      className={`w-1 mx-5 ${
        userId === ownId ? "bg-highlightText" : "bg-secondaryBackground"
      }`}
    ></span>
  );
}
