import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import onClickOutside from "react-onclickoutside";
import { openDeleteMessageModal } from "../../redux/actions";
import "./ChatMessageMenu.css";

function ChatMessageMenu() {
  const dispatch = useDispatch();
  // const openDeleteMessageModalDispatcher = useCallback(
  //   () => dispatch(openDeleteMessageModal()),
  //   [dispatch]
  // );
  // const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
  //   dispatch
  // ]);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  ChatMessageMenu.handleClickOutside = () => {
    console.log("CHAT MENU MESSAGE", open);
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(openDeleteMessageModal());
    setOpen(false);
  };

  return (
    <div
      className={`ChatMessageMenu--container${
        open ? " ChatMessageMenu--open" : ""
      }`}
    >
      <i className="fas fa-ellipsis-v fa-sm" role="button" onClick={toggle} />
      {open && (
        <div className="ChatMessageMenu--popup">
          <p onClick={handleDelete}>Delete</p>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => ChatMessageMenu.handleClickOutside
};

export default onClickOutside(ChatMessageMenu, clickOutsideConfig);
