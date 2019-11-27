import React from "react";
import "./Input6.css";

export default function Input6({
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
  spellCheck,
  friends
}) {
  return (
    <div className="Input6--container">
      <input
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
      />
      <i className="fab fa-youtube fa-lg" />
      <button type="button" className="button round">
        <i className="fas fa-search" />
      </button>
    </div>
  );
}
