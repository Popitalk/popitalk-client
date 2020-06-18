import React, { useState, useEffect } from "react";
import { useScrolling } from "react-use";

export default function useUserTouchedScrollbar(containerRef, messageLoading) {
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const isScrolling = useScrolling(containerRef);

  useEffect(() => {
    if (isScrolling && messageLoading === "success") {
      setUserHasScrolled(true);
    }
  }, [isScrolling, messageLoading]);

  return userHasScrolled;
}
