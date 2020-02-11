import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback
} from "react";
import { useInView } from "react-intersection-observer";
import { throttle } from "lodash";
import "./InfiniteScroller.css";

function InfiniteScroller(
  {
    className,
    threshold = 20,
    loader,
    loading = false,
    onBottomView,
    onTopView,
    hasMoreBottom = false,
    hasMoreTop = false,
    initialScroll = "top",
    children,
    reScroll
  },
  ref
) {
  const conRef = useRef(null);
  const containerRef = ref || conRef;
  let [loadingItems, setLoadingItems] = useState(null);
  // let [ready, setReady] = useState(false);
  let [oldScrollHeight, setOldScrollHeight] = useState(0);
  let [olderScrollHeight, setOlderScrollHeight] = useState(0);

  let [bottomRef, bottomInView, bottomEntry] = useInView({
    triggerOnce: false,
    rootMargin: `${threshold * 2}px 0px`
  });
  let [topRef, topInView, topEntry] = useInView({
    triggerOnce: false,
    rootMargin: `${threshold}px 0px`
  });

  const handleBottomView = useCallback(
    throttle(
      () => {
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
        setLoadingItems("top");
        onTopView();
      },
      50,
      { leading: true }
    ),
    [onTopView]
  );

  useLayoutEffect(() => {
    if (initialScroll === "bottom") {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    } else if (initialScroll === "top") {
      containerRef.current.scrollTo(0, 0);
    } else {
      let scrollVal;

      if (initialScroll <= threshold) {
        scrollVal = Math.floor(initialScroll) + threshold + 5;
      } else {
        scrollVal = Math.floor(initialScroll);
      }

      containerRef.current.scrollTo(0, scrollVal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, reScroll, threshold]);

  useEffect(() => {
    if (!loading) return;

    setOldScrollHeight(containerRef.current.scrollHeight);
  }, [containerRef, loading, threshold]);

  useEffect(() => {
    if (loading) return;

    if (initialScroll === 0) {
      containerRef.current.scrollTo(0, threshold + 5);
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      });
      setOldScrollHeight(0);
      setOlderScrollHeight(0);
    } else {
      const loadingTop = loadingItems === "top";

      if (loadingTop && containerRef.current.scrollTop <= threshold) {
        let scrollVal;

        if (containerRef.current.scrollHeight < oldScrollHeight) {
          let val1 = oldScrollHeight - olderScrollHeight;
          let val2 = containerRef.current.scrollHeight - val1;
          scrollVal = Math.floor(containerRef.current.scrollHeight - val2);
        } else {
          scrollVal = Math.floor(
            containerRef.current.scrollHeight - oldScrollHeight
          );
        }
        containerRef.current.scrollTo(0, scrollVal);
        containerRef.current.focus();
      }
      setOlderScrollHeight(oldScrollHeight);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, threshold]);

  useEffect(() => {
    if (bottomInView && !loading) {
      handleBottomView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bottomInView]);

  useEffect(() => {
    if (topInView && !loading) {
      handleTopView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topInView]);

  const Loader = loader;

  let classes = "InfiniteScroller";

  if (className) {
    classes = `${classes} ${className}`;
  }

  const showTopRef = onTopView && hasMoreTop;
  const showBottomRef = onBottomView && hasMoreBottom;

  const showTopLoading = loading && loadingItems === "top";
  const showBottomLoading = loading && loadingItems === "bottom";

  return (
    <div className={classes} ref={containerRef} tabIndex="-1">
      {showTopRef && (
        <div ref={topRef} className="InfiniteScroller--sentinel" />
      )}
      {showTopLoading && <Loader />}
      {children}
      {showBottomLoading && <Loader />}
      {showBottomRef && (
        <div ref={bottomRef} className="InfiniteScroller--sentinel" />
      )}
    </div>
  );
}

const forwardedInfiniteScroller = React.forwardRef(InfiniteScroller);

export default forwardedInfiniteScroller;
