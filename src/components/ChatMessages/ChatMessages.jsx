/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback
} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useScroll } from "react-use";
import {
  openProfileModal,
  openImageModal,
  getMessages,
  setScrolled
} from "../../redux/actions";
import messagesFormatter from "../../util/messagesFormatter";
import ChatMessageMenu from "../ChatMessageMenu";
import AvatarDeck from "../AvatarDeck";
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

const scrollMessageId = "8a429e32-6f32-4d2c-b41e-e55147c42fec";

export default function ChatMessages() {
  const scrollRef = useRef(null);
  const messageScrollRef = useRef(null);
  const { y } = useScroll(scrollRef);
  const { channelId } = useParams();
  const { messages, channels, scrolled, defaultAvatar } = useSelector(
    state => state.generalState
  );
  const channelLoaded = useSelector(state =>
    Boolean(state.generalState.channels[channelId]?.loaded)
  );
  const {
    messagesApiLoading: apiLoading,
    messagesApiError: apiError
  } = useSelector(state => state.apiState);
  const { id: ownId } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const openImageModalDispatcher = useCallback(
    () => dispatch(openImageModal()),
    [dispatch]
  );
  useLayoutEffect(() => {
    console.log("NO WAY");
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    setTimeout(() => {
      if (messageScrollRef.current) {
        messageScrollRef.current.scrollIntoView();
      }
    }, 2000);
  }, [channelId, channelLoaded]);

  useEffect(() => {
    if (
      channelLoaded &&
      channels[channelId].firstMessageId &&
      channels[channelId].firstMessageId !== messages[channelId][0].id &&
      !apiLoading &&
      y <= 20
    ) {
      console.log("BYE", scrollRef.current.scrollHeight);
      // scrollRef.current.scrollTo
      // scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
      dispatch(
        getMessages({
          channelId: channelId,
          beforeMessageId: messages[channelId][0].id
        })
      );

      scrollRef.current.scrollTo(0, 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  // useEffect(() => {
  //   if (!scrolled[channelId]) {
  //     console.log("NO WAY");
  //     scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  //   }
  // }, [channelId, scrolled]);

  // useLayoutEffect(() => {
  //   console.log("HELLO");
  //   scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  // }, [channelId, channels[channelId]?.loaded]);

  // useEffect(() => {
  //   if (
  //     channels[channelId]?.loaded &&
  //     channels[channelId].firstMessageId &&
  //     channels[channelId].firstMessageId !== messages[channelId][0].id &&
  //     !apiLoading &&
  //     y <= 20
  //   ) {
  //     console.log("BYE", scrollRef);
  //     // scrollRef.current.scrollTo
  //     // scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  //     dispatch(
  //       getMessages({
  //         channelId: channelId,
  //         beforeMessageId: messages[channelId][0].id
  //       })
  //     );

  //     scrollRef.current.scrollTo(0, 100);
  //   }
  // }, [apiLoading, channelId, channels, dispatch, messages, y]);

  // useEffect(() => {
  //   if (!apiLoading && channels[channelId]?.loaded) {
  //     console.log("DOWN");

  //     scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight / 2);
  //   }
  // }, [apiLoading, channelId, channels]);

  const formattedMessages = messagesFormatter(messages[channelId]);
  // const formattedMessages = messagesFormatter(messages[channelId] || []);

  const formattedMessagesValues = Object.values(formattedMessages);

  const lastMessageId =
    formattedMessagesValues.length !== 0 &&
    formattedMessagesValues[formattedMessagesValues.length - 1][
      formattedMessagesValues[formattedMessagesValues.length - 1].length - 1
    ].messages[
      formattedMessagesValues[formattedMessagesValues.length - 1][
        formattedMessagesValues[formattedMessagesValues.length - 1].length - 1
      ].messages.length - 1
    ].id;

  return (
    <div className="ChatMessages--container" ref={scrollRef}>
      {apiLoading && <Spinner />}
      {Object.entries(formattedMessages).map(([date, msgs1]) => (
        <div key={date}>
          <div className="ChatMessages--date">
            <h4>{date}</h4>
          </div>
          {msgs1.map(msgs2 => (
            <div className="ChatMessages--messageGroup" key={msgs2.id}>
              <img
                src={msgs2.avatar || defaultAvatar}
                alt="avatar"
                role="button"
                onClick={() => dispatch(openProfileModal(msgs2.userId))}
              />
              <div className="ChatMessages--messageGroup--nameDate">
                {msgs2.username} <span>{msgs2.createdAt}</span>
              </div>
              <div
                className={`ChatMessages--messageGroup--edge${
                  msgs2.userId === ownId ? " ChatMessages--myMessages" : ""
                }`}
              >
                <div />
              </div>
              <div className="ChatMessages--messages">
                {msgs2.messages.map((message, index) =>
                  index === msgs2.messages.length - 1 ? (
                    <div
                      ref={
                        message.id === scrollMessageId
                          ? messageScrollRef
                          : undefined
                      }
                      key={message.id}
                      className={`ChatMessages--message${
                        message.id === lastMessageId
                          ? " ChatMessages--messages--last"
                          : ""
                      }`}
                    >
                      {message.content && <p>{message.content}</p>}
                      {message.upload && (
                        <img
                          src={message.upload}
                          alt={message.upload}
                          className="ChatMessages--userImage"
                          role="button"
                          onClick={openImageModalDispatcher}
                        />
                      )}

                      {(msgs2.userId === ownId ||
                        (channels[channelId].type === "channel" &&
                          channels[channelId].admins?.includes(ownId))) && (
                        <ChatMessageMenu messageId={message.id} />
                      )}
                    </div>
                  ) : (
                    <div
                      key={message.id}
                      className="ChatMessages--message"
                      ref={
                        message.id === scrollMessageId
                          ? messageScrollRef
                          : undefined
                      }
                    >
                      {message.content && <div>{message.content}</div>}
                      {message.upload && (
                        <img
                          src={message.upload}
                          alt={message.upload}
                          className="ChatMessages--userImage"
                          role="button"
                          onClick={openImageModalDispatcher}
                        />
                      )}
                      {(msgs2.userId === ownId ||
                        (channels[channelId].type === "channel" &&
                          channels[channelId].admins?.includes(ownId))) && (
                        <ChatMessageMenu messageId={message.id} />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="ChatMessages--seen">
        <AvatarDeck size="small" avatars={seenUsers} />
      </div>
    </div>
  );
}
