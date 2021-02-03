import React from "react";
import Button from "../Controls/Button";
import SearchUserIcon from "../../assets/icons/searchUser";

export default function LeftPanelSubHeader({
  headerString,
  button,
  onClick,
  tooltip,
  analyticsString,
  searchUser
}) {
  const subHeaderClassName =
    "mx-4 my-2 text-sm font-semibold text-copy-secondary";
  return (
    <div className="flex flex-row items-center">
      <h4 className={subHeaderClassName}>{headerString}</h4>
      {searchUser && (
        <div
          className="p-1"
          role="button"
          onClick={onClick}
          data-tip={tooltip}
          data-place="bottom"
        >
          <SearchUserIcon />
        </div>
      )}
      {button && (
        <Button
          hoverable
          styleNone
          icon={button}
          styleNoneIconClassName="text-copy-link"
          onClick={onClick}
          analyticsString={analyticsString}
          tooltip={tooltip}
        />
      )}
    </div>
  );
}
