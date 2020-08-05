import React, { useState, useRef, useCallback } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDownControls({
  children,
  onClose,
  onClick,
  hasNotification = false,
  icon
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const handler = useCallback(() => {
    if (open) {
      setOpen(false);
      if (onClose) {
        onClose();
      }
    }
  }, [onClose, open]);

  useOnClickOutside(ref, handler);

  return (
    <div
      className={`${
        open === true
          ? "text-highlightText"
          : "cursor-pointer text-secondaryText hover:filter-brightness-8 transition-all duration-100"
      } relative flex items-center justify-center w-10 h-10 rounded-circle`}
      onMouseDown={() => {
        if (onClick) onClick();
        setOpen(true);
      }}
      role="button"
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      {hasNotification && (
        <div className="absolute top-0 mt-1 mr-1 right-0 z-10 p-1 border-2 rounded-circle border-primaryBackground bg-errorText" />
      )}
      {open && (
        <div
          className="absolute text-primaryText sm:right-0 sm:top-0 sm:mt-10
          // fixed top-0 right-0 mt-12 justify-center z-30"
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
}
