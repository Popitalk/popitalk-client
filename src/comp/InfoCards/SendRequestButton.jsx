import React from "react";
import Button from "../Button";

export default function SendRequestButton({ sentRequest, onClick }) {
  return (
    <Button
      size="md"
      icon={sentRequest ? "user-check" : "user-plus"}
      disabled={sentRequest}
      className="cursor-pointer bg-primaryBackground ml-auto"
      onClick={onClick}
    />
  );
}
