// Taskes a channel or a room
export function channelHasNewMessage(channel) {
  if (channel.chatNotifications || channel.lastMessageIsNew) return true;
  else return false;
}
