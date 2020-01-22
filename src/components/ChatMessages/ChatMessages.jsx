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
  getMessages
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

export default function ChatMessages() {
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);
  const { channelId } = useParams();
  const { messages, channels, defaultAvatar } = useSelector(
    state => state.generalState
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
  useEffect(() => {
    console.log("NO WAY");
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [channelId]);

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
                    <div key={message.id} className="ChatMessages--message">
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
