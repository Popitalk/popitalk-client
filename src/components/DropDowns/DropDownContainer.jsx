import React from "react";
import classnames from "classnames";

export default function DropDownContainer({ children }) {
  const classes = classnames(
    "w-screen sm:w-dropdown object-center bg-primaryBackground rounded-xl shadow-2xl overflow-hidden"
  );

  return <div className={classes}>{children}</div>;
}
