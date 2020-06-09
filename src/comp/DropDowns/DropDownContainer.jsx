import React from "react";
import classnames from "classnames";

export default function DropDownContainer({ children }) {
  const classes = classnames(
    "w-full relative sm:w-dropdown object-center bg-primaryBackground rounded-xl shadow-xl border border-highlightText overflow-hidden z-10"
  );

  return <div className={classes}>{children}</div>;
}
