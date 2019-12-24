import React from "react";
import "./FormSubmitPopup.css";

export default function FormSubmitPopup({
  type = "create",
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  onBlur,
  disabled,
  required,
  autoFocus,
  spellCheck
}) {
  return (
    <div className="FormSubmitPopup--container">
      <p>
        {type === "create"
          ? "Ready to make your own channel?"
          : "Remember to save your changes"}
      </p>
      <div>
        {type === "edit" && (
          <button type="button" className="FormSubmitPopup--reset">
            Reset
          </button>
        )}
        <button type="submit" className="FormSubmitPopup--submit">
          {type === "create" ? "Create" : "Save"}
        </button>
      </div>
    </div>
  );
}
