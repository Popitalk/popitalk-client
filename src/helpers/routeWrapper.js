import React from "react";

export const RouteWrapper = ({ leftPanel, children }) => {
  return (
    <div className="flex w-screen flex-row h-full overflow-y-auto bg-background-primary">
      <div className="flex sm:w-auto overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-20">
        {leftPanel}
      </div>
      {children}
    </div>
  );
};
