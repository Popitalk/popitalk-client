import React, { useState, useRef } from "react";
import Notifications from "../Notifications";
import useOnClickOutside from "use-onclickoutside";
import "./HeaderNotifications.css";

export default function HeaderNotifications() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <div className="HeaderNotifications--container">
      <i
        className="fas fa-bell fa-2x"
        role="button"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="HeaderNotifications--popup" ref={ref}>
          <Notifications closePopup={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
