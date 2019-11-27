import React from "react";
import "./Textarea2.css";

export default function Textarea2({
  header,
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
    <div className="Textarea2--container">
      {header && <h4>{header}</h4>}
      <div className="Textarea2--inputContainer">
        <textarea
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
