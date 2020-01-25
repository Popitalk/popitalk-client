import React from "react";
import "./FormSubmitPopup.css";

const Spinner = () => (
  <div className="FormSubmitPopup--spinner">
    <div className="FormSubmitPopup--spinner--circle" />
  </div>
);

export default function FormSubmitPopup({
  type = "create",
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  onBlur,
  disabled,
  loading,
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
        {!disabled && type === "edit" && (
          <button
            type="button"
            className="FormSubmitPopup--reset"
            disabled={disabled}
          >
            Reset
          </button>
        )}
        <button
          type="submit"
          className="FormSubmitPopup--submit"
          disabled={disabled}
        >
          {loading ? <Spinner /> : type === "create" ? "Create" : "Save"}
        </button>
      </div>
    </div>
  );
}
