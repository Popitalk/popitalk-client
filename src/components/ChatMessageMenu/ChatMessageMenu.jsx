import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import { openDeleteMessageModal } from "../../redux/actions";
import "./ChatMessageMenu.css";

export default function ChatMessageMenu({ messageId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleDelete = () => {
    dispatch(openDeleteMessageModal(messageId));
    setOpen(false);
  };

  return (
    <div
      className={`ChatMessageMenu--container${
        open ? " ChatMessageMenu--open" : ""
      }`}
    >
      <i
        className="fas fa-ellipsis-v fa-sm"
        role="button"
        onMouseDown={() => setOpen(true)}
      />
      {open && (
        <div className="ChatMessageMenu--popup" ref={ref}>
          <p onClick={handleDelete}>Delete</p>
        </div>
      )}
    </div>
  );
}
