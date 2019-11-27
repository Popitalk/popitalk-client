import React from "react";
import "./Input1.css";

export default function Input1({
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
    <div className="Input1--container">
      {header && <h4>{header}</h4>}
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
    </div>
  );
}
