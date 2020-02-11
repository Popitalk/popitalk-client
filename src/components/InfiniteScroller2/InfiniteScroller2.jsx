import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback
} from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useInView } from "react-intersection-observer";
import { throttle } from "lodash";
import "./InfiniteScroller2.css";

export default function InfiniteScroller2({
  className,
  threshold = 10,
  loader,
  loading = false,
  onBottomView,
  onTopView,
  hasMoreBottom = false,
  hasMoreTop = false,
  initialScroll = "top",
  children
}) {
  const containerRef = useRef(null);
  let [mounted, setMounted] = useState(false);
  let [scrolled, setScrolled] = useState(false);
  let [newChildren, setNewChildren] = useState(null);
  let [loadingItems, setLoadingItems] = useState(null);

  let [bottomRef, bottomInView, bottomEntry] = useInView({
    triggerOnce: false,
    rootMargin: `${threshold}px 0px`
  });
  let [topRef, topInView, topEntry] = useInView({
    triggerOnce: false,
    rootMargin: `${threshold}px 0px`
  });

  const handleBottomView = useCallback(
    throttle(
      () => {
        setScrolled(false);
        setLoadingItems("bottom");
        onBottomView();
      },
      50,
      { leading: true }
    ),
    [onBottomView]
  );

  const handleTopView = useCallback(
    throttle(
      () => {
        setScrolled(false);
        setLoadingItems("top");
        onTopView();
      },
      50,
      { leading: true }
    ),
    [onTopView]
  );

  const setScrolledCallback = useCallback(
    throttle(
      () => {
        setScrolled(true);
      },
      100,
      { leading: false }
    ),
    []
  );

  useLayoutEffect(() => {
    if (mounted) return;

    if (initialScroll) {
      if (initialScroll === "bottom") {
        // setTimeout(() => {
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
        // }, 200);
        // setTimeout(() => {
        //   containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
        // }, 200);
      } else if (initialScroll === "top") {
        containerRef.current.scrollTo(0, 0);
      } else if (Number.isInteger(initialScroll)) {
        containerRef.current.scrollTo(0, initialScroll);
      }
    }

    setScrolled(true);
    setMounted(true);
  }, [initialScroll, mounted]);

  useDeepCompareEffect(() => {
    if (mounted && loadingItems === "top") {
      if (containerRef.current.scrollTop === 0) {
        containerRef.current.scrollTo(0, 1);
      } else {
        containerRef.current.scrollTo(0, containerRef.current.scrollTop);
      }
      setScrolledCallback();
    } else if (mounted && loadingItems === "bottom") {
      setScrolledCallback();
    }

    setLoadingItems(null);

    setNewChildren(
      children.map((child, index) =>
        index === 0
          ? {
              ...child,
              ref: topRef
            }
          : index === children.length - 1
          ? {
              ...child,
              ref: bottomRef
            }
          : child
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  useEffect(() => {
    if (
      mounted &&
      hasMoreBottom &&
      bottomInView &&
      onBottomView &&
      !loading &&
      scrolled
    ) {
      handleBottomView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMoreBottom, bottomInView, onBottomView]);

  useEffect(() => {
    if (
      mounted &&
      hasMoreTop &&
      topInView &&
      onTopView &&
      !loading &&
      scrolled
    ) {
      handleTopView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMoreTop, topInView, onTopView]);

  const Loader = loader;

  let classes = "InfiniteScroller2";

  if (className) {
    classes = `${classes} ${className}`;
  }
  return (
    <div className={classes} ref={containerRef}>
      {loading && loadingItems === "top" && <Loader />}
      {newChildren || children}
      {loading && loadingItems === "bottom" && <Loader />}
    </div>
  );
}
