import React from "react";
import classnames from "classnames";
import Button from "../Controls/Button";

export default function ChannelFormSubmit({
  type = "create",
  disabled,
  handleReset,
  className
}) {
  const classes = classnames(
    "flex flex-row items-center justify-center py-2 px-6 bg-secondaryBackground rounded-xl text-sm text-primaryText",
    { [className]: className }
  );
  return (
    <div className={classes}>
      <p className="mr-8">
        {type === "create"
          ? "Ready to create your own channel?"
          : "Remember to save your changes."}
      </p>
      <div>
        {!disabled && type === "update" && (
          <Button
            variant="text"
            size="md"
            type="button"
            shape="pill"
            disabled={disabled}
            onClick={handleReset}
            className="text-secondaryText"
          >
            Reset
          </Button>
        )}
        <Button size="md" type="submit" shape="pill" disabled={disabled}>
          {type === "create" ? "Create" : "Save"}
        </Button>
      </div>
    </div>
  );
}
