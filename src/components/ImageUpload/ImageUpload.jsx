import React from "react";
import "./ImageUpload.css";

export default function ImageUpload({
  icon,
  onUpload,
  onRemove,
  disabled,
  user
}) {
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
            {user ? <p>Select Avatar</p> : <p>Select Channel Picture</p>}
          </div>
        )}
        <div className="ImageUpload--shade">
          {icon &&
            (user ? <p>Change Avatar</p> : <p>Change Channel Picture</p>)}
        </div>
      </div>
      {icon && (
        <button
          type="button"
          className="ImageUpload--remove"
          onClick={onRemove}
          disabled={disabled}
        >
          Remove
        </button>
      )}
    </div>
  );
}
