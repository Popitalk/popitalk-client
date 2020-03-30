import React from "react";
import styled from "styled-components";
import { color, space, typography, variant } from "styled-system";

const inputContainer = styled.div`
  position: relative;
  width: 100%;

  /* border-color: */
`;

const inputHeader = styled.h4`
  color: #000000;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export default function Input({
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
    <inputContainer error={error}>
      {header && (
        <inputHeader>
          {header} {error && <span>{error}</span>}
        </inputHeader>
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
    </inputContainer>
  );
}
