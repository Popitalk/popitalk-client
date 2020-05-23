import React, { useState } from "react";
import SiteHeaderMain from "./SiteHeaderMain";

export default function DefaultLayout({ children }) {
  return (
    <div >
      <SiteHeaderMain />
      {children}
    </div>
  );
}


