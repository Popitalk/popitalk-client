import React, { useEffect, useRef, useState } from "react";
import ChatPanel from "../comp/Chat/ChatPanel";
import { getMessages, addMessage, deleteMessage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useScroll } from "react-use";
import useScrollDivOnLoad from "./hooks/useScrollDivOnLoad";
import useScrolledToTop from "./hooks/useScrolledToTop";

function ChatPanelContainer(props) {
  const [previousY, setPreviousY] = useState(0);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const channelId = props.match.params.roomId || props.match.params.channelId;
  const messageLoading = useSelector(state => state.api.messages.status);
  const messages = useSelector(state => state.messages[channelId]);
  const me = useSelector(state => state.self.username);
  const defaultAvatar = useSelector(state => state.general.defaultAvatar);
  const allMessagesReceived = useSelector(state => state.messages.allReceived);
  const containerRef = useRef(null);
  const { y } = useScroll(containerRef);
  const dispatch = useDispatch();
  const scrolledToTop = useScrolledToTop(
    channelId,
    messageLoading,
    messages,
    userHasScrolled,
    y
  );
  useEffect(() => {
    setUserHasScrolled(false);
    setPreviousY(0);
  }, [channelId]);
  useScrollDivOnLoad(containerRef, messageLoading, messages, userHasScrolled);
  // Get messages when scrolled to top
  useEffect(() => {
    if (y < previousY) {
      setUserHasScrolled(true);
    }
    setPreviousY(y);
  }, [previousY, y]);
  useEffect(() => {
    if (scrolledToTop && !allMessagesReceived) {
      dispatch(
        getMessages({
          channelId,
          beforeMessageId: messages && messages[0].id
        })
      );
    }
  }, [
    channelId,
    dispatch,
    y,
    scrolledToTop,
    messageLoading,
    allMessagesReceived,
    messages
  ]);
  // Get messages on load and on channel change.
  useEffect(() => {
    dispatch(
      getMessages({
        channelId
      })
    );
  }, [channelId, dispatch]);
  const handleSendMessage = text => {
    if (text) {
      dispatch(
        addMessage({
          id: "",
          userId: "",
          channelId,
          content: text,
          upload: null,
          createdAt: Date.now(),
          author: {
            id: "",
            username: me,
            avatar: null
          }
        })
      );
    } else {
      console.log("No empty messages.");
    }
    containerRef.current.lastChild.scrollIntoView();
  };
  const handleDelete = ({ type, id }) => {
    dispatch(deleteMessage({ type, id, channelId }));
  };
  return (
    <ChatPanel
      scrolledToTop={scrolledToTop && !allMessagesReceived}
      me={me}
      defaultAvatar={defaultAvatar}
      messages={messages}
      handleSendMessage={handleSendMessage}
      handleDelete={handleDelete}
      containerRef={containerRef}
    />
  );
}

export default withRouter(ChatPanelContainer);
