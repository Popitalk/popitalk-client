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
  maxLength,
  error
}) {
  return (
    <div className={`Textarea2--container${error ? " Textarea2--error" : ""}`}>
      {header && (
        <h4>
          {header} {error && <span>{error}</span>}
        </h4>
      )}
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
