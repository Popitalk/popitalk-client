import groupBy from "lodash/groupBy";
import dateFormatter from "./dateFormatter";

const messagesFormatter = messages => {
  const messagesByDate = groupBy(messages, x =>
    dateFormatter(new Date(x.createdAt), true)
  );

  const newMessages = {};

  Object.entries(messagesByDate).forEach(([date, msg]) => {
    if (!newMessages[date]) newMessages[date] = [];

    msg.forEach(userMessage => {
      if (newMessages[date].length === 0) {
        newMessages[date].push({
          id: userMessage.id,
          username: userMessage.username,
          avatar: userMessage.avatar,
          createdAt: dateFormatter(new Date(userMessage.createdAt)),
          messages: [
            {
              id: userMessage.id,
              ...(userMessage.content && { content: userMessage.content }),
              ...(userMessage.image && { image: userMessage.image })
            }
          ]
        });
      } else {
        if (
          newMessages[date][newMessages[date].length - 1].username ===
          userMessage.username
        ) {
          newMessages[date][newMessages[date].length - 1].messages.push({
            id: userMessage.id,
            ...(userMessage.content && { content: userMessage.content }),
            ...(userMessage.image && { image: userMessage.image })
          });
        } else {
          newMessages[date].push({
            id: userMessage.id,
            username: userMessage.username,
            avatar: userMessage.avatar,
            createdAt: dateFormatter(new Date(userMessage.createdAt)),
            messages: [
              {
                id: userMessage.id,
                ...(userMessage.content && { content: userMessage.content }),
                ...(userMessage.image && { image: userMessage.image })
              }
            ]
          });
        }
      }
    });
  });

  return newMessages;
};

export default messagesFormatter;
