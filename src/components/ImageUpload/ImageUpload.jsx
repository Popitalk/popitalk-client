import React from "react";
import "./ImageUpload.css";

export default function ImageUpload({ icon, onUpload, onRemove, disabled }) {
  return (
    <div className="ImageUpload--container">
      <div className="ImageUpload--upload">
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={onUpload}
          disabled={disabled}
        />
        {icon ? (
          <img src={icon} alt="icon" className="ImageUpload--image" />
        ) : (
          <div className="ImageUpload--noImage">
            <p>Select Channel Picture</p>
          </div>
        )}
        <div className="ImageUpload--shade">
          {icon && <p>Change Channel Picture</p>}
        </div>
      </div>
      <button
        type="button"
        className="ImageUpload--remove"
        onClick={onRemove}
        disabled={disabled}
      >
        Remove
      </button>
    </div>
  );
}
