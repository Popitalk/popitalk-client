import React, { useState, useRef, useCallback } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import Button from "../Controls/Button";

export default function DropDownControls({
  children,
  onClose,
  onClick,
  hasNotification = false,
  src,
  userProfile,
  username,
  tooltip,
  tooltipPlace,
  analyticsString
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
          ? "text-copy-highlight"
          : "cursor-pointer text-copy-secondary hover:filter-brightness-8 transition-all duration-100"
      } sm:relative flex items-center justify-center w-auto h-10 rounded-circle`}
    >
      {userProfile ? (
        <Button
          hoverable
          imageButton
          imageButtonSrc={src}
          imageButtonSpan={username}
          imageButtonClassName="w-6 h-6 rounded-full object-cover"
          imageButtonSpanClassName="hidden sm:block text-xs font-bold text-copy-primary ml-2"
          className="p-2 px-3 rounded-lg"
          analyticsString="My Profile Button: SiteHeaderMain"
          onMouseDown={() => {
            if (onClick) onClick();
            setOpen(true);
          }}
        />
      ) : (
        <Button
          styleNone
          icon={src}
          styleNoneIconClassName="text-xl"
          className="flex relative w-10 h-10 items-center justify-center"
          tooltip={tooltip}
          tooltipPlace={tooltipPlace}
          analyticsString={analyticsString}
          onMouseDown={() => {
            if (onClick) onClick();
            setOpen(true);
          }}
        />
      )}
      {hasNotification && (
        <span className="flex absolute top-0 mt-1 mr-1 right-0 h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-copy-error"></span>
        </span>
      )}
      {open && (
        <div
          className="absolute text-copy-primary sm:right-0 sm:top-0 sm:mt-10
          // fixed top-0 right-0 mt-12 justify-center z-50"
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
}
