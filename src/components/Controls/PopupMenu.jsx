import React, { useState, useRef } from "react";
import classnames from "classnames";
import useOnClickOutside from "use-onclickoutside";
import Button from "./Button";

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

  const containerClasses = classnames("justify-end w-auto relative", {
    [className]: className
  });

  const iconClasses = classnames(
    "flex items-center justify-center text-md font-bold select-none w-6 h-6",
    {
      "text-copy-secondary group-hover:filter-brightness-9": !open,
      "text-copy-highlight": open
    }
  );

  return (
    <div
      className={containerClasses}
      // onMouseLeave={() => setOpen(false)}
      ref={ref}
    >
      {loading ? (
        <p>loading...</p>
      ) : (
        <Button
          styleNone
          icon="ellipsis-v"
          className={iconClasses}
          onClick={disabled ? undefined : menuHandler}
        />
      )}
      {open && (
        <div className="absolute z-10 bottom-0 right-0 mr-0 mr-6 flex items-center justify-center flex-shrink-0 bg-background-secondary shadow-channel rounded-md">
          {options.map((option, index) => {
            const optionClasses = classnames(
              "w-full h-full duration-100 hover:bg-hover-highlight text-copy-primary select-none py-1 px-6 text-center text-sm rounded-md",
              {
                "text-copy-error": option.danger
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
