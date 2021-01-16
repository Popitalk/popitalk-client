import React from "react";
import Logo from "../assets/logo.png";

const PageLoader = () => (
  <div className="flex flex-col h-screen w-full bg-background-primary">
    <div className="flex items-center px-6 h-12 w-full bg-background-primary">
      <img src={Logo} className="w-8 h-8" alt="Popitalk Logo" />
    </div>
    <div className="h-full w-full bg-background-secondary">
      <div className="w-68 h-full bg-background-primary"></div>
    </div>
  </div>
);

export default PageLoader;
