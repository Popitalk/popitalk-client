/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  useScroll,
  usePrevious,
  useUpdateEffect,
  useDebounce
} from "react-use";
import { createSelector } from "reselect";
import {
  openProfileModal,
  getMessages,
  getLatestMessages,
  setInitialScroll
} from "../../redux/actions";
import messagesFormatter2 from "../../util/messagesFormatter2";
import PopupMenu from "../PopupMenu";
import AvatarDeck from "../AvatarDeck";
import InfiniteScroller from "../../components/InfiniteScroller";
import MessageAuthorAvatar from "./MessageAuthorAvatar";
import MessageCreatedTime from "./MessageCreatedTime";
import MessageAuthorUsername from "./MessageAuthorUsername";
import MessageContent from "./MessageContent";
import MessageHighlightSpan from "./MessageHighlightSpan";

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

export default function ChatMessages({ channelId, channelMessages }) {
  const currentUserUsername = useSelector(state => state.self.username);
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
  console.log(messages);
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
              <div
                className="ChatMessages--date flex justify-center items-center m-2"
                key={message.id}
              >
                <h4 className="bg-tertiaryBackground rounded-lg px-5 py-2 text-highlightText">
                  {message.date}
                </h4>
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
              "ChatMessages--message flex": true,
              "ChatMessages--lastMessage":
                message.type === "lastMessage" ||
                message.type === "firstLastMessage",
              "ChatMessages--myMessage": message.userId === ownId
            });

            return (
              <div className={classes1} key={message.id}>
                <div className="flex items-center space-x-2 text-xs ml-1">
                  <MessageAuthorAvatar
                    defaultAvatar={defaultAvatar}
                    message={message}
                  />
                  <MessageAuthorUsername username={message.username} />
                  <MessageCreatedTime createdAt={message.createdAt} />
                </div>
                <div className={classes2}>
                  <MessageHighlightSpan
                    currentUserUsername={currentUserUsername}
                    username={message.username}
                  />
                  <MessageContent message={message} />
                  {/* <div className="ChatMessages--messageContent">
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
                  </div> */}
                  {
                    //TODO: Bring this back
                  }
                  {/* {(message.userId === ownId ||
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
                    ))} */}
                </div>
              </div>
            );
          } else if (
            message.type === "message" ||
            message.type === "lastMessage"
          ) {
            const classes = classNames({
              "ChatMessages--message flex": true,
              "ChatMessages--lastMessage": message.type === "lastMessage",
              "ChatMessages--myMessage": message.userId === ownId
            });
            return (
              <div className={classes} key={message.id}>
                <MessageHighlightSpan
                  currentUserUsername={currentUserUsername}
                  username={message.username}
                />
                <MessageContent message={message} />
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
