import React, { useState } from "react";
import strings from "../../helpers/localization";
import classnames from "classnames";

export default function ScrollableCardList({
  axis,
  displayControls,
  children
}) {
  const [checked, setChecked] = useState(false);

  const scrollableClasses = classnames({
    "flex-row": axis === "x",
    "flex-col": axis !== "x",
    "cursor-pointer": displayControls,
    "flex flex-grow overflow-auto px-4 py-4 items-start mozilla-thin-scrollbar": true
  });

  return (
    <div className="py-4">
      {displayControls && (
        <div className="flex items-center px-4 space-x-2">
          <p className="text-sm text-copy-primary font-bold">Loop Playlist</p>
          <input
            type="checkbox"
            onChange={e => setChecked(checked => !checked)}
          />
          <p className="text-xs text-copy-secondary">
            {checked
              ? "Your channel will loop your playlist from the beginning when the last video ends"
              : strings.upNextSubtitle}
          </p>
        </div>
      )}
      <div className={scrollableClasses}>{children}</div>
    </div>
  );
}
