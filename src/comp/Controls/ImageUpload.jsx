import React from "react";
import classnames from "classnames";
import defaultImage from "../../assets/default/user-default.png";
// import Button from "./Button";

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
    "relative flex justify-center items-center rounded-circle group",
    {
      "h-32 w-32": size === "sm",
      "h-48 w-48": size === "md"
    }
  );

  return (
    <div className={containerClasses}>
      <div className={imageClasses}>
        <input
          id="i"
          type="file"
          accept="image/jpeg, image/png"
          onChange={onUpload}
          disabled={disabled}
          name={name}
          className="absolute rounded-circle cursor-pointer z-40 border-none outline-none rounded-lg h-full w-full opacity-0"
        />
        {icon ? (
          <img
            id="img"
            src={icon}
            alt="icon"
            className="relative img h-full w-full rounded-circle p-px z-10"
          />
        ) : (
          <p className="relative flex flex-row justify-center items-center bg-primaryBackground rounded-circle w-full h-full relative">
            <img
              src={defaultImage}
              alt="icon"
              className="img h-full w-full rounded-circle"
            />
          </p>
        )}
        <div className="absolute flex flex-col justify-center items-center text-tertiaryText text-sm font-bold rounded-circle w-full h-full z-20 bg-black bg-opacity-25 transition-opacity opacity-0 group-hover:opacity-100 duration-100">
          {icon ? <p>{changeMessage}</p> : <p>{selectMessage}</p>}
        </div>
      </div>
      {/* {icon && (
        <Button
          variant="text"
          type="button"
          onClick={onRemove}
          disabled={disabled}
        >
          <p className="text-secondaryText text-sm font-regular">Remove</p>
        </Button>
      )} */}
    </div>
  );
}
