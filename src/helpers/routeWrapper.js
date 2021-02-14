import React from "react";
import { removeLeftPanel } from "../redux/actions";

export const RouteWrapper = ({
  leftPanel,
  children,
  windowSize,
  leftPanelIsRemoved,
  dispatch
}) => {
  if (windowSize.width <= 640) {
    return (
      <div className="flex w-screen flex-row h-full overflow-y-auto bg-background-primary">
        {leftPanelIsRemoved && (
          <div
            className="fixed h-withoutHeader overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-30 bg-black bg-opacity-25"
            onClick={() => dispatch(removeLeftPanel())}
            role="button"
          >
            {leftPanel}
          </div>
        )}
        <div className="h-withoutHeader overflow-y-scroll w-full">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-screen flex-row bg-background-primary">
      <div className="flex h-withoutHeader overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-30">
        {leftPanel}
      </div>
      <div className="h-withoutHeader overflow-y-scroll w-full">{children}</div>
    </div>
  );
};

export const ChannelWrapper = ({
  leftPanel,
  children,
  windowSize,
  leftPanelIsRemoved,
  dispatch
}) => {
  if (windowSize.width <= 640) {
    return (
      <div className="flex w-screen flex-row h-full overflow-y-auto bg-background-primary">
        {leftPanelIsRemoved && (
          <div
            className="fixed h-withoutHeader overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-30 bg-black bg-opacity-25"
            onClick={() => dispatch(removeLeftPanel())}
            role="button"
          >
            {leftPanel}
          </div>
        )}
        {children}
      </div>
    );
  }
  return (
    <div className="flex w-screen flex-row h-withoutHeader overflow-y-auto bg-background-primary">
      <div className="flex sm:w-auto overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-20">
        {leftPanel}
      </div>
      {children}
    </div>
  );
};
