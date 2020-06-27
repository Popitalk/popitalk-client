/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useScroll,
  usePrevious,
  useUpdateEffect,
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

import AvatarDeck from "../AvatarDeck";
import InfiniteScroller from "./InfiniteScroller";
import ChatMessage from "./ChatMessage";
import Spinner from "../Spinner";

const seenUsers = [
  "https://i.imgur.com/aqjzchq.jpg",
  "https://i.imgur.com/tLljw1z.jpg"
];

const OldMessagesAlert = ({ onClick }) => (
  <div
    className="ChatMessages--oldMessagesAlert"
    role="button"
    onClick={onClick}
  >
    {/* <p> This is the start of the chat!</p>
    <p>Jump To Present ▼</p> */}
  </div>
);

const selectFormattedMessages = createSelector(
  state => state.messages,
  (_, channelId) => channelId,
  (messages, channelId) =>
    messages[channelId] ? messagesFormatter2(messages[channelId]) : []
);

export default function ChatMessages({ channelId, channelMessages }) {
  const containerRef = useRef();
  const { y } = useScroll(containerRef);
  const channel = useSelector(state => state.channels[channelId]);
  const hasMoreBottom = useHasMoreBottom(channel, channelMessages);
  const oldScrollTop = useRef();
  // const [debouncedY, setDebouncedY] = useState(null);
  const previousChannelId = usePrevious(channelId);
  const { defaultAvatar } = useSelector(state => state.general);
  const initialScroll = channel.chatSettings?.initialScroll ?? "bottom";
  const messages = useSelector(state =>
    selectFormattedMessages(state, channelId)
  );
  const apiLoading = useSelector(state => state.api.messages.loading);
  const apiError = useSelector(state => state.api.messages.error);
  const deletedMessageApiLoading = useSelector(
    state => state.api.deleteMessage.loading
  );
  const deletedMessageId = useSelector(
    state => state.api.deleteMessage.args?.messageId
  );

  const { id: ownId } = useSelector(state => state.self);
  const dispatch = useDispatch();
  // const openImageModalDispatcher = useCallback(
  //   () => dispatch(openImageModal()),
  //   [dispatch]
  // );

  const [, cancel] = useDebounce(
    () => {
      let yVal;

      if (
        containerRef.current.scrollHeight -
          (containerRef.current.scrollTop + containerRef.current.clientHeight) <
        100
      ) {
        yVal = null;
      } else {
        yVal = containerRef.current.scrollTop;
      }
      oldScrollTop.current = {
        channelId,
        y: yVal
      };

      // console.log("XXX", channelId, y);
      // dispatch(setInitialScroll({ channelId: channelId, initialScroll: yVal }));
    },
    5000,
    [y]
  );

  useEffect(() => {
    return () => {
      if (oldScrollTop.current) {
        dispatch(
          setInitialScroll({
            channelId: oldScrollTop.current.channelId,
            initialScroll: oldScrollTop.current.y
          })
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  useUpdateEffect(() => {
    if (channelId !== previousChannelId) return;
    if (!channel.lastMessagesUpdateByWebsockets) return;

    if (messages[messages.length - 1].userId === ownId) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      });
    } else if (
      containerRef.current.scrollHeight -
        (containerRef.current.scrollTop + containerRef.current.clientHeight) <
      100
    ) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
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

  const hasMoreTop =
    channel?.firstMessageId &&
    channel.firstMessageId !== channelMessages[0]?.id;
  return (
    // <div className="ChatMessages--container" ref={scrollRef}>
    <>
      <InfiniteScroller
        className="overflow-auto h-full mt-1 pb-4"
        ref={containerRef}
        onTopView={onTopView}
        hasMoreTop={hasMoreTop}
        onBottomView={onBottomView}
        hasMoreBottom={hasMoreBottom}
        initialScroll={initialScroll}
        reScroll={channelId}
        loading={apiLoading}
        loader={Spinner}
      >
        {messages.map(message => {
          return (
            <ChatMessage
              key={message.id}
              message={message}
              defaultAvatar={defaultAvatar}
              ownId={ownId}
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
