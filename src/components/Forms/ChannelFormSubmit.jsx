import React from "react";
import classnames from "classnames";
import Button from "../Controls/Button";
import strings from "../../helpers/localization";

export default function ChannelFormSubmit({
  type = "create",
  disabled,
  handleReset,
  className
}) {
  const classes = classnames(
    "flex items-center justify-between bg-background-secondary rounded-xl text-sm text-copy-primary",
    { [className]: className }
  );
  return (
    <div className={classes}>
      <p className="text-copy-secondary">
        {type === "create" ? strings.readyToCreate : strings.saveChannelEdit}
      </p>
      <div>
        {!disabled && type === "update" && (
          <Button
            actionButton
            variant="text"
            size="md"
            type="button"
            disabled={disabled}
            onClick={handleReset}
            analyticsString="Channel Reset Button: ChannelFormSubmit"
            className="text-copy-secondary"
          >
            {strings.resetButton}
          </Button>
        )}
        <Button
          actionButton
          size="md"
          type="submit"
          disabled={disabled}
          analyticsString="Channel Create Button: ChannelFormSubmit"
        >
          {type === "create" ? strings.createButton : "Save"}
        </Button>
      </div>
    </div>
  );
}
