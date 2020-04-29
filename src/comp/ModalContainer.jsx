import React from "react";
import classnames from "classnames";

export default function ModalContainer({ children, noHeader }) {
  const modalClasses = classnames(
    "relative md:w-3/4 lg:w-1/2 object-center bg-primaryBackground pb-8 pr-8 pl-8 rounded-xl shadow-xl",
    {
      "pt-8": noHeader,
      "pt-12": !noHeader
    }
  );

  return <div className={modalClasses}>{children}</div>;
}
