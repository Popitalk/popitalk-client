import React from "react";
import "./FormSubmitPopup.css";

export default function FormSubmitPopup({
  header,
  type,
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
      <p>Ready to make your own channel?</p>
      <div>
        <button type="button" className="FormSubmitPopup--reset">
          Reset
        </button>
        <button type="submit" className="FormSubmitPopup--submit">
          Create
        </button>
      </div>
    </div>
  );
}
