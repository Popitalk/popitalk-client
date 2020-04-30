import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ModalHeader({ title, handleBack }) {
  // Ensure the title is centered even if the back button isn't displayed
  const width = "w-12";

  const backButton = handleBack ? (
    <div className={width}>
      <div
        className={`p-2 inline-block`}
        role="button"
        onClick={() => handleBack()}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-base font-bold text-tertiaryText"
        />
      </div>
    </div>
  ) : (
    <div className={width}></div>
  );

  return (
    <div className="inset-x-0 top-0 bg-highlightText rounded-t-xl h-10 flex flex-row items-center justify-between">
      {backButton}
      <div className="text-base font-bold text-tertiaryText inline-block">
        {title}
      </div>
      {<div className={width}></div>}
    </div>
  );
}
