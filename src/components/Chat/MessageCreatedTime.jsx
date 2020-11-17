import React from "react";

export default function MessageCreatedTime({ createdAt }) {
  return <span className="text-copy-secondary">{createdAt}</span>;
}
