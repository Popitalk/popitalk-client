import React from "react";
import "./Input4.css";

export default function Input4({
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
  spellCheck = false,
  maxLength,
  error
}) {
  return (
    <div className={`Input4--container${error ? " Input4--error" : ""}`}>
      {header && (
        <h4>
          {header} {error && <span>{error}</span>}
        </h4>
      )}
      <div className="Input4--inputContainer">
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
        <p>{`${(value && value.length) || "0"}/${maxLength || "0"}`}</p>
      </div>
    </div>
  );
}
