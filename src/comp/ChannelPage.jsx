import React from "react";
import SiteHeaderMain from "./SiteHeaderMain";

function ChannelPage({ children }) {
  return (
    <>
      <div className="fixed z-40 w-full md:relative">
        <SiteHeaderMain />
      </div>
      <div className="flex">{children}</div>
    </>
  );
}

export default ChannelPage;
