import React from "react";

export default function MessageHighlightSpan({
  currentUserUsername,
  username
}) {
  return (
    <span
      className={`w-1 mx-5 ${
        username === currentUserUsername
          ? "bg-highlightText"
          : "bg-secondaryBackground"
      }`}
    ></span>
  );
}
