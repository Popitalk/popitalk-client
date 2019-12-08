import React from "react";
import "./ToggleCheck.css";

export default function ToggleCheck({
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
    <label className="ToggleCheck--container">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        name={name}
        required={required}
        onChange={onChange}
      />
      <span />
    </label>
  );
}
