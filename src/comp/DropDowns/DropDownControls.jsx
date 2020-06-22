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
    <div className="relative">
      <FontAwesomeIcon
        icon={icon}
        className="cursor-pointer text-secondaryText hover:text-highlightText"
        roll="button"
        size="lg"
        onMouseDown={() => {
          if (onClick) onClick();
          setOpen(true);
        }}
      />
      {open && (
        <div className="absolute right-0 mt-2 z-30" ref={ref}>
          {children}
        </div>
      )}
    </div>
  );
}
