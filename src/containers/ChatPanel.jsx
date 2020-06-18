import React, { useEffect, useRef, useState } from "react";
import ChatPanel from "../comp/Chat/ChatPanel";
import { getMessages, addMessage, deleteMessage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useScroll } from "react-use";
import useUserTouchedScrollbar from "./hooks/useUserTouchedScrollbar";

function ChatPanelContainer(props) {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const channelId = props.match.params.roomId || props.match.params.channelId;
  const messageLoading = useSelector(state => state.api.messages.status);
  const messages = useSelector(state => state.messages[channelId]);
  const me = useSelector(state => state.self.username);
  const defaultAvatar = useSelector(state => state.general.defaultAvatar);
  const allMessagesReceived = useSelector(state => state.messages.allReceived);
  const containerRef = useRef(null);
  const { y } = useScroll(containerRef);
  const dispatch = useDispatch();
  const userHasScrolled = useUserTouchedScrollbar(containerRef, messageLoading);

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
  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollTop);
    containerRef.current.focus();
  }, [containerRef]);
  useEffect(() => {
    if (y < 20 && messageLoading === "success" && userHasScrolled) {
      setScrolledToTop(true);
      dispatch(
        getMessages({
          channelId,
          beforeMessageId: messages && messages[0].id
        })
      );
    }
    if (y > 20) {
      setScrolledToTop(false);
    }
  }, [channelId, dispatch, messageLoading, messages, userHasScrolled, y]);
  useEffect(() => {
    dispatch(
      getMessages({
        channelId
      })
    );
  }, [channelId, dispatch]);
  const handleSendMessage = text => {
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
