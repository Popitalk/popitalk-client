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
  onBlur
}) {
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
        options={options.map(option => ({ value: option, label: option }))}
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
