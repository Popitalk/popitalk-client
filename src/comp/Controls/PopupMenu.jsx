import React, { useState, useRef } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOnClickOutside from "use-onclickoutside";

export default function PopupMenu({
  id,
  options,
  disabled,
  loading,
  className
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const optionHandler = handler => {
    handler(id);
    setOpen(false);
  };

  const menuHandler = event => {
    event.stopPropagation();
    setOpen(!open);
  };

  const containerClasses = classnames(
    "group flex items-center justify-center w-4 relative",
    {
      [className]: className
    }
  );

  const iconClasses = classnames("text-lg font-bold", {
    "text-secondaryText group-hover:filter-brightness-8": !open,
    "text-highlightText": open
  });

  return (
    <div
      className={containerClasses}
      role="button"
      onClick={disabled ? undefined : menuHandler}
      ref={ref}
    >
      {loading ? (
        <p>loading...</p>
      ) : (
        <FontAwesomeIcon icon="ellipsis-v" className={iconClasses} />
      )}
      {open && (
        <div className="absolute z-10 top-0 right-0 mt-5 mr-0 flex flex-col items-center justify-center flex-shrink-0 bg-primaryBackground shadow-xl rounded-lg border border-primaryBorder">
          {options.map((option, index) => {
            const optionClasses = classnames(
              "inline-flex justify-center items-center w-full bg-primaryBackground transition-filter duration-300 hover:bg-highlightBackground select-none py-1 px-6 text-center",
              {
                "rounded-t-lg": index === 0,
                "rounded-b-lg": index + 1 === options.length,
                "text-errorText": option.danger
              }
            );
            return (
              <p
                key={index}
                onClick={() => optionHandler(option.handler)}
                className={optionClasses}
                role="button"
              >
                {option.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
