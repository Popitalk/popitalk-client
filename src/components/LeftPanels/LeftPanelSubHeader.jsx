import React from "react";
import Button from "../Controls/Button";

export default function LeftPanelSubHeader({
  headerString,
  button,
  onClick,
  tooltip,
  analyticsString
}) {
  const subHeaderClassName =
    "mx-4 my-2 text-sm font-semibold text-copy-secondary";
  return (
    <div className="flex flex-row items-center">
      <h4 className={subHeaderClassName}>{headerString}</h4>
      {button === true && (
        <Button
          hoverable
          styleNone
          icon="plus"
          styleNoneIconClassName="text-copy-highlight"
          onClick={onClick}
          analyticsString={analyticsString}
          tooltip={tooltip}
        />
      )}
    </div>
  );
}
