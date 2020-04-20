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
      onMouseDown={disabled ? undefined : () => setOpen(true)}
    >
      {loading ? (
        <p>loading...</p>
      ) : (
        <FontAwesomeIcon icon="ellipsis-v" className={iconClasses} />
      )}
      {open && (
        <div
          className="absolute top-0 right-0 mt-5 mr-0 flex flex-col items-center justify-center flex-shrink-0 bg-primaryBackground shadow-xl rounded-lg border border-primaryBorder"
          ref={ref}
        >
          {options.map((option, index) => {
            const optionClasses = classnames(
              "inline-flex justify-center items-center w-full bg-primaryBackground transition-filter duration-300 hover:filter-brightness-9 active:filter-brightness-8 select-none py-1 px-6 text-center",
              {
                "rounded-t-lg": index === 0,
                "rounded-b-lg": index + 1 === options.length
              }
            );
            return (
              <p
                key={option.name}
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
