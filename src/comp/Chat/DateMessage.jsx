import React from "react";

export default function DateMessage({ message }) {
  return (
    <div
      className="ChatMessages--date flex justify-center items-center m-2"
      key={message.id}
    >
      <h4 className="bg-tertiaryBackground rounded-lg px-5 py-2 text-highlightText">
        {message.date}
      </h4>
    </div>
  );
}
