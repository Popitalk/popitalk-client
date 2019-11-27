import React from "react";
import "./Textarea1.css";

export default function Textarea1({
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
  spellCheck,
  maxLength
}) {
  return (
    <div className="Textarea1--container">
      <button type="button" className="button pill">
        <i className="far fa-smile fa-2x" />
      </button>
      <textarea
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        spellCheck={spellCheck}
        required={required}
        maxLength={maxLength}
      />
      <div>
        <button type="button" className="button round">
          <i className="far fa-image" />
        </button>
      </div>
      <button type="button" className="button pill">
        Send
      </button>
    </div>
  );
}
