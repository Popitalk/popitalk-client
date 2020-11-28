import React from "react";
import classnames from "classnames";
import { Toggle } from "../../App/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuButton({
  selected,
  danger,
  leftIcon,
  rightIcon,
  text,
  onClick,
  href,
  redirect,
  display,
  hasNext
}) {
  const buttonClasses = classnames(
    "flex justify-between items-center hover:bg-hover-highlight rounded-md px-6 py-3 w-full h-full select-none cursor-pointer",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected,
      "text-copy-error": danger
    }
  );
  const redirectClasses = classnames(
    "flex items-center w-full h-full space-x-2 no-underline select-none cursor-pointer",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected
    }
  );
  const displayClasses = classnames(
    "flex justify-between items-center space-x-2 w-full h-full text-copy-secondary px-6 py-3 rounded-md select-none bg-background-secondary"
  );

  return (
    <>
      {redirect ? (
        <div role="button" onClick={onClick} className={buttonClasses}>
          <div className="flex justify-start items-center space-x-2 w-full h-full">
            <FontAwesomeIcon
              className="text-lg cursor-pointer"
              icon={leftIcon}
            />
            <a href={href} className={redirectClasses}>
              {text}
            </a>
          </div>
          {rightIcon && (
            <FontAwesomeIcon className="text-xs" icon={rightIcon} />
          )}
        </div>
      ) : display ? (
        <div role="button" onClick={onClick} className={displayClasses}>
          <p>{text}</p>
          <Toggle />
        </div>
      ) : (
        <div role="button" onClick={onClick} className={buttonClasses}>
          <div className="flex justify-start items-center space-x-2">
            <FontAwesomeIcon
              className="text-lg cursor-pointer"
              icon={leftIcon}
            />
            <p>{text}</p>
          </div>
          {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
        </div>
      )}
    </>
  );
}
