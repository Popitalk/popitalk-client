import React from "react";
import "./Input3.css";

export default function Input3({
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
    <div className={`Input3--container${friends ? " Input3--friends" : ""}`}>
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
      <button type="button" className="button round">
        <i className="fas fa-search" />
      </button>
    </div>
  );
}
