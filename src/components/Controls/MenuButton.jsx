import React from "react";
import classnames from "classnames";

export default function MenuButton({ selected, danger, text, onClick }) {
  const buttonClasses = classnames(
    "flex justify-center hover:bg-hover-highlight rounded-lg px-6 py-2 select-none",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected
    }
  );

  return (
    <div role="button" onClick={onClick} className={buttonClasses}>
      <p className={danger ? "text-copy-error" : ""}>{text}</p>
    </div>
  );
}
