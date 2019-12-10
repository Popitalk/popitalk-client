import React from "react";
import "./Input7.css";
import { spawn } from "child_process";

export default function Input7({
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
  header,
  error
}) {
  return (
    <div className={`Input7--container${error ? " Input7--error" : ""}`}>
      {header && (
        <h4>
          {header} {error && <span>{error}</span>}
        </h4>
      )}
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
    </div>
  );
}
