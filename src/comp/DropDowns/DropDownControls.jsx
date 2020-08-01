import React, { useState, useRef, useCallback } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDownControls({ children, onClose, onClick, icon }) {
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
    <button
      className={`${
        open === true
          ? "text-highlightText"
          : "cursor-pointer text-secondaryText hover:filter-brightness-8 transition-all duration-100"
      } relative flex items-center justify-center w-10 h-10 rounded-circle focus:outline-none`}
      onMouseDown={() => {
        if (onClick) onClick();
        setOpen(true);
      }}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      {open && (
        <div className="absolute right-0 top-0 mt-10 z-30" ref={ref}>
          {children}
        </div>
      )}
    </button>
  );
}
