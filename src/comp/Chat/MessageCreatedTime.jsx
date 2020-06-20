import React from "react";
import moment from "moment";

export default function MessageCreatedTime({ createdAt }) {
  return (
    <span className="text-secondaryText">{moment(createdAt).fromNow()}</span>
  );
}
