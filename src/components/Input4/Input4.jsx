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
  spellCheck,
  maxLength,
  friends
}) {
  return (
    <div className={`Input4--container${friends ? " Input4--friends" : ""}`}>
      {header && <h4>{header}</h4>}
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
