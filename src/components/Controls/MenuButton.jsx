import React from "react";
import classnames from "classnames";
import { Toggle } from "../../App/ThemeContext";

export default function MenuButton({
  selected,
  danger,
  text,
  onClick,
  href,
  redirect,
  display
}) {
  const buttonClasses = classnames(
    "flex justify-start hover:bg-hover-highlight rounded-md px-6 py-2 select-none",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected
    }
  );
  const redirectClasses = classnames("w-full h-full no-underline select-none", {
    "bg-hover-highlight text-copy-primary": selected,
    "text-copy-secondary": !selected
  });
  const displayClasses = classnames(
    "flex justify-between items-center w-full h-full text-copy-secondary px-6 py-2 rounded-md select-none bg-background-secondary"
  );

  return (
    <>
      {redirect ? (
        <div role="button" onClick={onClick} className={buttonClasses}>
          <a href={href} className={redirectClasses}>
            {text}
          </a>
        </div>
      ) : display ? (
        <div role="button" onClick={onClick} className={displayClasses}>
          <p>{text}</p>
          <Toggle />
        </div>
      ) : (
        <div role="button" onClick={onClick} className={buttonClasses}>
          <p className={danger ? "text-copy-error" : ""}>{text}</p>
        </div>
      )}
    </>
  );
}
