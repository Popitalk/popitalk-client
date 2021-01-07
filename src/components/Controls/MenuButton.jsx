import React from "react";
import classnames from "classnames";
import { Toggle } from "../../helpers/themeContext";
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
  hasNext,
  freeform
}) {
  const buttonClasses = classnames(
    "flex justify-between items-center hover:bg-hover-highlight rounded-md px-6 py-3 w-full h-full select-none cursor-pointer mt-1",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected,
      "text-copy-error": danger
    }
  );
  const redirectClasses = classnames(
    "flex items-center w-full h-full space-x-2 no-underline select-none cursor-pointer mt-1",
    {
      "bg-hover-highlight text-copy-primary": selected,
      "text-copy-secondary": !selected
    }
  );
  const displayClasses = classnames(
    "flex justify-between items-center space-x-2 w-full h-full text-copy-secondary px-6 py-3 rounded-md select-none bg-background-secondary mt-1"
  );

  const customClasses = classnames(
    `${freeform} space-x-2 text-copy-secondary rounded-t-md select-none`,
    {
      "bg-background-secondary text-copy-highlight": selected,
      "text-copy-secondary": !selected
    }
  );
  return (
    <>
      {redirect ? (
        <div role="button" onClick={onClick} className={buttonClasses}>
          <div className="flex justify-start items-center space-x-2 w-full h-full">
            <FontAwesomeIcon
              className="text-lg cursor-pointer"
              icon={["fab", leftIcon]}
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
      ) : freeform ? (
        <div role="button" onClick={onClick} className={customClasses}>
          <div className="flex justify-start items-center space-x-2">
            <FontAwesomeIcon
              className="text-lg cursor-pointer"
              icon={leftIcon}
            />
            <p>{text}</p>
          </div>
          {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
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
