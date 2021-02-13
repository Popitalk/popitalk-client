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
            className="fixed h-screen overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-30 bg-black bg-opacity-25"
            onClick={() => dispatch(removeLeftPanel())}
            role="button"
          >
            {leftPanel}
          </div>
        )}
        <div className="w-full overflow-y-scroll">{children}</div>
      </div>
    );
  }
  return (
    <div className="flex w-screen flex-row bg-background-primary">
      <div className="flex h-screen overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-30">
        {leftPanel}
      </div>
      <div className={"w-full h-screen overflow-y-scroll"}>{children}</div>
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
            className="fixed h-screen overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-30 bg-black bg-opacity-25"
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
    <div className="flex w-screen flex-row h-full overflow-y-auto bg-background-primary">
      <div className="flex sm:w-auto overflow-y-auto flex-shrink-0 mozilla-thin-scrollbar z-20">
        {leftPanel}
      </div>
      {children}
    </div>
  );
};
