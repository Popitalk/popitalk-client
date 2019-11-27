import React from "react";
import "./Textarea1.css";

export default function Textarea1({
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
    <div
      className={`Textarea1--container${friends ? " Textarea1--friends" : ""}`}
    >
      {header && <h4>{header}</h4>}
      <div className="Textarea1--inputContainer">
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
