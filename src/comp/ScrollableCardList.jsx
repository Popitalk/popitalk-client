import React from "react";
import strings from "../helpers/localization";

export default function ScrollableCardList({ axis, children }) {
  return (
    <div className="py-4">
      <p className="px-4 text-lg text-primaryText select-none">
        {strings.upNext}
      </p>
      <div
        className={`flex ${
          axis === "x" ? "flex-row" : "flex-col"
        } flex-grow overflow-auto px-4 py-4 items-start mozilla-thin-scrollbar`}
      >
        {children}
      </div>
    </div>
  );
}
