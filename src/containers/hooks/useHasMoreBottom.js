import { useEffect, useState } from "react";

export default function useScrollDivOnLoad(channel, channelMessages) {
  const [hasMoreBottom, setHasMoreBottom] = useState(false);
  useEffect(() => {
    if (
      channel?.lastMessageId &&
      channel.lastMessageId !== channelMessages[channelMessages.length - 1].id
    ) {
      setHasMoreBottom(true);
    }
  }, [channel, channelMessages]);
  return hasMoreBottom;
}
