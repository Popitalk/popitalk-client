import React, { useState, useRef } from "react";
import FriendRequests from "../FriendRequests";
import useOnClickOutside from "use-onclickoutside";
import "./HeaderFriends.css";

export default function HeaderFriends() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <div className="HeaderFriends--container">
      <i
        className="fas fa-user-plus fa-2x"
        role="button"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="HeaderFriends--popup" ref={ref}>
          <FriendRequests />
        </div>
      )}
    </div>
  );
}
