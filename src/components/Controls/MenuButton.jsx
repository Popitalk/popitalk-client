import React from "react";
import classnames from "classnames";

export default function MenuButton({
  selected,
  danger,
  text,
  onClick,
  href,
  redirect
}) {
  const buttonClasses = classnames(
    "flex justify-center hover:bg-hover-highlight rounded-lg px-6 py-2 select-none",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected
    }
  );
  const buttonClasses1 = classnames(
    "flex justify-center hover:bg-hover-highlight rounded-lg w-full h-full no-underline select-none",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected
    }
  );

  return (
    <div role="button" onClick={onClick} className={buttonClasses}>
      {redirect ? (
        <a href={href} className={buttonClasses1}>
          <p className={danger ? "text-copy-error" : ""}>{text}</p>
        </a>
      ) : (
        <p className={danger ? "text-copy-error" : ""}>{text}</p>
      )}
    </div>
  );
}
