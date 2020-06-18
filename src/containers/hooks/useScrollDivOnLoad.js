import { useEffect } from "react";

export default function useScrollDivOnLoad(
  containerRef,
  messageLoading,
  messages,
  userHasScrolled
) {
  useEffect(() => {
    if (
      (messageLoading === "initial" || messageLoading === "success") &&
      !userHasScrolled
    ) {
      if (messages) {
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
      }
    }
  }, [containerRef, messageLoading, messages, userHasScrolled]);
}
