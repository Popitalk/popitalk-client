/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  useMemo
} from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  useScroll,
  usePrevious,
  useUpdateEffect,
  useDebounce,
  useUnmount
} from "react-use";
import useDeepCompareEffect from "use-deep-compare-effect";
import { createSelector } from "reselect";
import {
  openProfileModal,
  openImageModal,
  getMessages,
  getLatestMessages,
  setInitialScroll
} from "../../redux/actions";
import messagesFormatter from "../../util/messagesFormatter";
import messagesFormatter2 from "../../util/messagesFormatter2";
import PopupMenu from "../PopupMenu";
import AvatarDeck from "../AvatarDeck";
import InfiniteScroller from "../InfiniteScroller";
import InfiniteScroller2 from "../InfiniteScroller2";
import "./ChatMessages.css";

const seenUsers = [
  "https://i.imgur.com/aqjzchq.jpg",
  "https://i.imgur.com/tLljw1z.jpg"
];

const Spinner = () => (
  <div className="ChatMessages--spinner">
    <div className="ChatMessages--spinner--circle" />
  </div>
);

const Spinner2 = () => (
  <div className="ChatMessages--spinner2">
    <div className="ChatMessages--spinner2--circle" />
  </div>
);

const OldMessagesAlert = ({ onClick }) => (
  <div
    className="ChatMessages--oldMessagesAlert"
    role="button"
    onClick={onClick}
  >
    <p>You&apos;re Viewing Older Messages</p>
    <p>Jump To Present ▼</p>
  </div>
);

const selectFormattedMessages = createSelector(
  state => state.messages,
  (_, channelId) => channelId,
  (messages, channelId) =>
    messages[channelId] ? messagesFormatter2(messages[channelId]) : []
);

export default function ChatMessages({ channelId, channelMessages }) {
  const containerRef = useRef(null);
  const { y } = useScroll(containerRef);
  const oldScrollTop = useRef(null);
  // const [debouncedY, setDebouncedY] = useState(null);
  const previousChannelId = usePrevious(channelId);
  const { defaultAvatar } = useSelector(state => state.general);
  const channel = useSelector(state => state.channels[channelId]);
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
        beforeMessageId: channelMessages[0].id
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
    channel?.firstMessageId && channel.firstMessageId !== channelMessages[0].id;
  const hasMoreBottom =
    channel?.lastMessageId &&
    channel.lastMessageId !== channelMessages[channelMessages.length - 1].id;

  return (
    // <div className="ChatMessages--container" ref={scrollRef}>
    <>
      <InfiniteScroller
        className="ChatMessages--container"
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
          if (message.type === "date")
            return (
              <div className="ChatMessages--date" key={message.id}>
                <h4>{message.date}</h4>
              </div>
            );
          else if (
            message.type === "firstMessage" ||
            message.type === "firstLastMessage"
          ) {
            const classes1 = classNames({
              "ChatMessages--firstMessage":
                message.type === "firstMessage" ||
                message.type === "firstLastMessage",
              "ChatMessages--lastMessage":
                message.type === "lastMessage" ||
                message.type === "firstLastMessage",
              "ChatMessages--myMessage": message.userId === ownId
            });
            const classes2 = classNames({
              "ChatMessages--message": true,
              "ChatMessages--lastMessage":
                message.type === "lastMessage" ||
                message.type === "firstLastMessage",
              "ChatMessages--myMessage": message.userId === ownId
            });

            return (
              <div className={classes1} key={message.id}>
                <div>
                  <img
                    src={message.avatar || defaultAvatar}
                    alt="avatar"
                    role="button"
                    onClick={() => dispatch(openProfileModal(message.userId))}
                  />
                  <div className="ChatMessages--nameAndDate">
                    <p>{message.username}</p>
                    <span>{message.createdAt}</span>
                  </div>
                </div>
                <div className={classes2}>
                  <div className="ChatMessages--edge" />
                  <div className="ChatMessages--messageContent">
                    {message.upload && (
                      <img
                        src={message.upload}
                        alt={message.upload}
                        className="ChatMessages--userImage"
                        role="button"
                        // onClick={openImageModalDispatcher}
                      />
                    )}
                    {message.content && <p>{message.content}</p>}
                  </div>
                  {(message.userId === ownId ||
                    (channel?.type === "channel" &&
                      channel.admins?.includes(ownId))) &&
                    (deletedMessageId === message.id &&
                    deletedMessageApiLoading ? (
                      <Spinner2 />
                    ) : (
                      <PopupMenu
                        type="message"
                        messageId={message.id}
                        disabled={deletedMessageApiLoading}
                      />
                    ))}
                </div>
              </div>
            );
          } else if (
            message.type === "message" ||
            message.type === "lastMessage"
          ) {
            const classes = classNames({
              "ChatMessages--message": true,
              "ChatMessages--lastMessage": message.type === "lastMessage",
              "ChatMessages--myMessage": message.userId === ownId
            });
            return (
              <div className={classes} key={message.id}>
                <div className="ChatMessages--edge" />
                <div className="ChatMessages--messageContent">
                  {message.upload && (
                    <img
                      src={message.upload}
                      alt={message.upload}
                      className="ChatMessages--userImage"
                      role="button"
                      // onClick={openImageModalDispatcher}
                    />
                  )}
                  {message.content && <p>{message.content}</p>}
                </div>
                {(message.userId === ownId ||
                  (channel?.type === "channel" &&
                    channel.admins?.includes(ownId))) &&
                  (deletedMessageId === message.id &&
                  deletedMessageApiLoading ? (
                    <Spinner2 />
                  ) : (
                    <PopupMenu
                      type="message"
                      messageId={message.id}
                      disabled={deletedMessageApiLoading}
                    />
                  ))}
              </div>
            );
          }
        })}
        {!hasMoreBottom && (
          <div className="ChatMessages--seen">
            <AvatarDeck size="small" avatars={seenUsers} />
          </div>
        )}
      </InfiniteScroller>
      {hasMoreBottom && <OldMessagesAlert onClick={handleJumpToPresent} />}
    </>
  );
}
