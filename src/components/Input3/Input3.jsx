import React from "react";
import "./Input3.css";

export default function Input3({
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
        maxLength={maxLength}
      />
      <button type="button" className="button round" onClick={onClick}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
}
