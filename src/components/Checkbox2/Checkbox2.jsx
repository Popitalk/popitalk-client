import React from "react";
import "./Checkbox2.css";

export default function Checkbox2({
  checked,
  defaultChecked,
  disabled,
  name,
  required,
  type,
  value,
  onChange
}) {
  return (
    <label
      className={`Checkbox2--container${checked ? " Checkbox2--checked" : ""}`}
    >
      <input
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        name={name}
        required={required}
        onChange={onChange}
      />
      <i className="fas fa-check" />
    </label>
  );
}
