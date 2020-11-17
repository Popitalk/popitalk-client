import React from "react";
import classnames from "classnames";

export default function MenuButton({ selected, danger, text, onClick }) {
  const buttonClasses = classnames(
    "flex justify-center hover:bg-background-highlight rounded-lg px-6 py-2 select-none",
    {
      "bg-background-highlight": selected
    }
  );

  return (
    <div role="button" onClick={onClick} className={buttonClasses}>
      <p className={danger ? "text-copy-error" : ""}>{text}</p>
    </div>
  );
}
