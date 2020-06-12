import React, { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDownControls({ children, onClose, onClick, icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
      if (onClose) {
        onClose();
      }
    }
  });

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
