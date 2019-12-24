import React, { useState } from "react";
import FriendRequests from "../FriendRequests";
import onClickOutside from "react-onclickoutside";
import "./HeaderFriends.css";

function HeaderFriends() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  HeaderFriends.handleClickOutside = () => {
    console.log("000");
    setOpen(false);
  };

  return (
    <div className="HeaderFriends--container">
      <i className="fas fa-user-plus fa-2x" role="button" onClick={toggle} />
      {open && (
        <div className="HeaderFriends--popup">
          <FriendRequests />
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => HeaderFriends.handleClickOutside
};

export default onClickOutside(HeaderFriends, clickOutsideConfig);
