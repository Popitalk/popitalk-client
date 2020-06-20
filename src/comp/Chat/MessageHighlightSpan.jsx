import React from "react";

export default function MessageHighlightSpan({ me, username }) {
  return (
    <span
      className={`w-1 mx-5 ${
        username === me ? "bg-highlightText" : "bg-secondaryBackground"
      }`}
    ></span>
  );
}
