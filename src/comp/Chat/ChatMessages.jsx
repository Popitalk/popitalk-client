/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  usePrevious,
  useUpdateEffect,
  useScrolling,
  useDebounce
} from "react-use";
import { createSelector } from "reselect";
import {
  getMessages,
  getLatestMessages,
  setInitialScroll
} from "../../redux/actions";
import messagesFormatter2 from "../../util/messagesFormatter2";
import useHasMoreBottom from "../../containers/hooks/useHasMoreBottom";

import InfiniteScroller from "./InfiniteScroller";
import ChatMessage from "./ChatMessage";
import Spinner from "../Spinner";

const OldMessagesAlert = ({ onClick }) => (
  <div
    className="ChatMessages--oldMessagesAlert"
    role="button"
    onClick={onClick}
  >
    <p> This is the start of the chat!</p>
    <p>Jump To Present ▼</p>
  </div>
);

const selectFormattedMessages = createSelector(
  state => state.messages,
  (_, channelId) => channelId,
  (messages, channelId) =>
    messages[channelId] ? messagesFormatter2(messages[channelId]) : []
);

export default function ChatMessages({
  channelId,
  channelMessages,
  isGifsOpen
}) {
  const [clickedMessage, setClickedMessage] = useState("");
  const containerRef = useRef(null);
  const oldScrollTop = useRef(null);
  const scrolling = useScrolling(containerRef);
  const channel = useSelector(state => state.channels[channelId]);
  const hasMoreBottom = useHasMoreBottom(channel, channelMessages);
  const previousChannelId = usePrevious(channelId);
  const { defaultAvatar } = useSelector(state => state.general);
  const initialScroll = useSelector(state => {
    return state.channels[channelId].initialScroll || "bottom";
  });
  const hasMoreTop =
    channel?.firstMessageId &&
    channel.firstMessageId !== channelMessages[0]?.id;
  const messages = useSelector(state =>
    selectFormattedMessages(state, channelId)
  );
  const apiLoading = useSelector(state => state.api.messages.loading);
  // const apiError = useSelector(state => state.api.messages.error);

  const { id: ownId } = useSelector(state => state.self);
  const dispatch = useDispatch();
  // const openImageModalDispatcher = useCallback(
  //   () => dispatch(openImageModal()),
  //   [dispatch]
  // );

  const updateClickedMessage = messageId => {
    if (clickedMessage === messageId) {
      setClickedMessage("");
    } else {
      setClickedMessage(messageId);
    }
  };

  const [, cancel] = useDebounce(
    () => {
      // if (
      //   containerRef.current.scrollHeight -
      //     (containerRef.current.scrollTop + containerRef.current.clientHeight) <
      //   100
      // ) {
      //   // yVal = null;
      // } else {
      //   yVal = containerRef.current.scrollTop;
      // }
      const y = containerRef.current.scrollTop;
      if (y) {
        oldScrollTop.current = {
          channelId,
          y
        };
      } else if (y === 0 && !hasMoreTop) {
        oldScrollTop.current = {
          channelId,
          y: 1
        };
      }
    },
    200,
    [scrolling]
  );

  useEffect(() => {
    return () => {
      dispatch(
        setInitialScroll({
          channelId: oldScrollTop.current.channelId,
          initialScroll: oldScrollTop.current.y
        })
      );
      cancel();
    };
  }, [channelId, dispatch, cancel]);

  useUpdateEffect(() => {
    if (channelId !== previousChannelId) return;
    if (!channel.lastMessagesUpdateByWebsockets) return;

    if (messages[messages.length - 1].userId === ownId) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "auto"
      });
    } else if (
      containerRef.current.scrollHeight -
        (containerRef.current.scrollTop + containerRef.current.clientHeight) <
      100
    ) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "auto"
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const onTopView = () => {
    dispatch(
      getMessages({
        channelId: channelId,
        beforeMessageId: channelMessages[0]?.id
      })
    );
  };
  const onBottomView = () => {
    dispatch(
      getMessages({
        channelId: channelId,
        afterMessageId: channelMessages[channelMessages.length - 1].id
      })
    );
  };
  const handleJumpToPresent = () => {
    dispatch(getLatestMessages({ channelId }));
  };

  return (
    // <div className="ChatMessages--container" ref={scrollRef}>
    // InfiniteScroller has to have h-screen, because h-full recalculates/repaints all messages on every key stroke in ChatActions
    <>
      <InfiniteScroller
        className="overflow-auto h-screen pb-4 mozilla-thin-scrollbar"
        ref={containerRef}
        onTopView={onTopView}
        hasMoreTop={hasMoreTop}
        onBottomView={onBottomView}
        hasMoreBottom={hasMoreBottom}
        initialScroll={initialScroll}
        reScroll={channelId}
        loading={apiLoading}
        loader={Spinner}
        isGifsOpen={isGifsOpen}
        channelId={channelId}
      >
        {messages.map(message => {
          return (
            <ChatMessage
              key={message.id}
              message={message}
              defaultAvatar={defaultAvatar}
              ownId={ownId}
              clickedMessage={clickedMessage}
              updateClickedMessage={updateClickedMessage}
            />
          );
        })}
        {/* {!hasMoreBottom && (
          <div className="ChatMessages--seen">
            <AvatarDeck size="small" avatars={seenUsers} />
          </div>
        )} */}
      </InfiniteScroller>
      {hasMoreBottom && <OldMessagesAlert onClick={handleJumpToPresent} />}
    </>
  );
}
