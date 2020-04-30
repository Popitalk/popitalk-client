import React from "react";
import classnames from "classnames";

export default function DropDownContainer({ children }) {
  const modalClasses = classnames(
    "relative md:w-3/4 lg:w-1/2 object-center bg-primaryBackground pb-2 pr-2 pl-2 pt-12 rounded-xl shadow-xl border border-highlightText"
  );

  return <div className={modalClasses}>{children}</div>;
}
