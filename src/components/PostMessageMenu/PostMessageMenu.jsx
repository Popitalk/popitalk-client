import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import { openDeleteMessageModal } from "../../redux/actions";
import "./PostMessageMenu.css";

export default function PostMessageMenu({ messageId, disabled }) {
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
      className={`PostMessageMenu--container${
        open && !disabled ? " PostMessageMenu--open" : ""
      }`}
    >
      <i
        className="fas fa-ellipsis-v fa-sm"
        role="button"
        onMouseDown={disabled ? undefined : () => setOpen(true)}
      />
      {open && (
        <div className="PostMessageMenu--popup" ref={ref}>
          <p onClick={handleDelete}>Delete</p>
        </div>
      )}
    </div>
  );
}
