import React from "react";
import CreatableSelect from "react-select/creatable";
import "./Select.css";

export default function Select({
  header,
  checked,
  defaultChecked,
  disabled,
  loading,
  name,
  required,
  type,
  value,
  placeholder,
  onClick,
  options,
  onChange,
  isMulti = true,
  isClearable = true,
  isSearchable = true,
  onBlur,
  maxOptions = 3
}) {
  // setInterval(() => {
  //   console.log(value);
  //   console.log(value && value.length >= maxOptions);
  // }, 1000);
  return (
    <div className="Select--container">
      {header && <h4>{header}</h4>}
      <CreatableSelect
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        value={value ? { value: value, label: value } : undefined}
        onChange={onChange}
        onBlur={onBlur}
        options={
          value && value.length >= maxOptions
            ? []
            : options.map(option => ({ value: option, label: option }))
        }
        noOptionsMessage={() => {
          return value && value.length >= maxOptions
            ? "You've reached the max options value"
            : "No options available";
        }}
        isDisabled={disabled || loading}
        placeholder={placeholder}
        isLoading={loading}
        isValidNewOption={(inputValue, selectValue, selectOptions) => {
          if (inputValue.length >= 3 && inputValue.length <= 10) return true;
          return false;
        }}
        classNamePrefix="Select--select"
        styles={{
          control: base => ({
            ...base,
            fontSize: "20px"
          })
        }}
      />
    </div>
  );
}
