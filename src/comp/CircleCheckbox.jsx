import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CircleCheckBox({ checked, onChange }) {
  const checkClasses = classnames(
    "rounded-full w-10 h-10 border-4 border-highlightText",
    {
      "bg-highlightText flex items-center justify-center": checked
    }
  );

  return (
    <div className={checkClasses} role="button" onClick={onChange}>
      {checked ? (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-base font-bold text-tertiaryText"
        />
      ) : (
        <></>
      )}
    </div>
  );
}
