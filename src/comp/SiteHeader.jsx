import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SiteHeaderMain from "./SiteHeaderMain";
import SiteHeaderWelcome from "./SiteHeaderWelcome";

function SiteHeader({ isWelcome }) {
  /**const [isWelcome, setIsWelcome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/welcome")) {
      setIsWelcome(true);
    }
  }, [location]);**/

  return isWelcome ? <SiteHeaderWelcome /> : <SiteHeaderMain />;
}

export default SiteHeader;
