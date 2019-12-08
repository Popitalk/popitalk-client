import React from "react";
import "./Input5.css";

export default function Input5({
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
  maxLength,
  friends,
  onClick
}) {
  return (
    <div className="Input5--container">
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
        maxLength={maxLength}
      />
      <button type="button" className="button round" onClick={onClick}>
        <i className="fas fa-search fa-2x" />
      </button>
    </div>
  );
}
