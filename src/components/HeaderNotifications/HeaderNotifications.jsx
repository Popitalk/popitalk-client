import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Notifications from "../Notifications";
import "./HeaderNotifications.css";

function HeaderNotifications() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  HeaderNotifications.handleClickOutside = () => setOpen(false);

  return (
    <div className="HeaderNotifications--container">
      <i className="fas fa-bell fa-2x" role="button" onClick={toggle} />
      {open && (
        <div className="HeaderNotifications--popup">
          <Notifications />
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => HeaderNotifications.handleClickOutside
};

export default onClickOutside(HeaderNotifications, clickOutsideConfig);
