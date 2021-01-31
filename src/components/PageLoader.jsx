import React from "react";
import Logo from "../assets/logo.png";

export default function PageLoader() {
  const loadingComponent = (
    <div className="animate-pulse flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-background-quaternary h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1 h-4 bg-background-quaternary w-3/4" />
      </div>
      <div className="w-full h-40 bg-background-quaternary"></div>
    </div>
  );

  const leftPanelLoading = (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-background-secondary rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-background-secondary "></div>
          <div className="h-4 bg-background-secondary w-5/6"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen w-screen bg-background-primary">
      <div className="flex items-center px-6 h-12 w-full bg-background-primary">
        <img src={Logo} className="w-8 h-8" alt="Popitalk Logo" />
      </div>
      <div className="flex flex-row h-full w-full rounded-lg bg-background-secondary">
        <div className="hidden sm:flex flex-col space-y-8 p-4 w-68 h-full bg-background-primary">
          {leftPanelLoading}
          {leftPanelLoading}
          {leftPanelLoading}
        </div>
        <div className="grid w-full gap-4 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
          {loadingComponent}
          {loadingComponent}
          {loadingComponent}
          {loadingComponent}
          {loadingComponent}
          {loadingComponent}
        </div>
      </div>
    </div>
  );
}
