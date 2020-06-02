import React from "react";
import classnames from "classnames";
import Button from "./Button";

export default function ImageUpload({
  name,
  icon,
  size = "md",
  onUpload,
  onRemove,
  disabled,
  selectMessage = "Select Image",
  changeMessage = "Change Image",
  className
}) {
  const containerClasses = classnames("flex flex-col items-center", {
    [className]: className
  });

  const imageClasses = classnames(
    "flex flex-row justify-center items-center bg-gradient-b-upload rounded-circle h-40 w-40 relative p-1 group",
    {
      "h-40 w-40": size === "sm",
      "h-56 w-56": size === "md"
    }
  );

  return (
    <div className={containerClasses}>
      <div className={imageClasses}>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={onUpload}
          disabled={disabled}
          name={name}
          className="absolute rounded-circle cursor-pointer z-40 border-none outline-none rounded-lg h-full w-full opacity-0"
        />
        {icon ? (
          <img
            src={icon}
            alt="icon"
            className="img relative h-full w-full rounded-circle p-1 z-10"
          />
        ) : (
          <p className="flex flex-row justify-center items-center bg-primaryBackground text-secondaryButtonText font-bold rounded-circle w-full h-full relative z-10">
            {selectMessage}
          </p>
        )}
        <div className="flex flex-col justify-center items-center text-tertiaryText font-bold rounded-circle absolute w-full h-full z-20 bg-black opacity-50 cursor-pointer invisible group-hover:visible">
          {icon && <p>{changeMessage}</p>}
        </div>
      </div>
      {icon && (
        <Button
          variant="text"
          type="button"
          onClick={onRemove}
          disabled={disabled}
          className="mt-2 text-secondaryText"
        >
          Remove
        </Button>
      )}
    </div>
  );
}
