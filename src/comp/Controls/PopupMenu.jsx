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
    "group flex items-center justify-end w-full relative",
    {
      [className]: className
    }
  );

  const iconClasses = classnames("text-md font-bold select-none", {
    "text-secondaryText group-hover:filter-brightness-9 duration-100": !open,
    "text-highlightText": open
  });

  return (
    <div
      className={containerClasses}
      role="button"
      onClick={disabled ? undefined : menuHandler}
      onMouseLeave={() => setOpen(false)}
      ref={ref}
    >
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="flex flex-shrink-0 w-6 h-6 justify-center items-center">
          <FontAwesomeIcon icon="ellipsis-v" className={iconClasses} />
        </div>
      )}
      {open && (
        <div className="absolute z-10 top-0 right-0 mt-6 mr-0 flex flex-col items-center justify-center flex-shrink-0 bg-primaryBackground shadow-channel rounded-md">
          {options.map((option, index) => {
            const optionClasses = classnames(
              "inline-flex justify-center items-center w-full bg-primaryBackground transition-filter duration-100 hover:bg-highlightBackground select-none py-1 px-6 text-center text-sm",
              {
                "rounded-t-md": index === 0,
                "rounded-b-md": index + 1 === options.length,
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
