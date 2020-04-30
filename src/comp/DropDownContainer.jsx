import React from "react";
import classnames from "classnames";

export default function DropDownContainer({ children }) {
  const modalClasses = classnames(
    "w-full sm:w-dropdown object-center bg-primaryBackground rounded-xl shadow-xl border border-highlightText"
  );

  return <div className={modalClasses}>{children}</div>;
}
