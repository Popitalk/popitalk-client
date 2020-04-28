import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ModalHeader({ title, handleBack }) {
  return (
    <div className="absolute inset-x-0 top-0 bg-highlightText rounded-t-xl">
      <div className="flex flex-row justify-between items-center">
        <div
          className="p-2 inline-block"
          role="button"
          onClick={() => handleBack()}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-base font-bold text-tertiaryText"
          />
        </div>
        <div className="text-base font-bold text-tertiaryText inline-block">
          {title}
        </div>
        <div></div>
      </div>
    </div>
  );
}
