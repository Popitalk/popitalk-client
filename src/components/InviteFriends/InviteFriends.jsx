import React from "react";
import InviteList from "../InviteList";
import "./InviteFriends.css";

const friends = [
  {
    id: "a1",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a2",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a3",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a4",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a5",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a6",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a7",
    avatar: "https://i.imgur.com/aqjzchq.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a8",
    avatar: "https://i.imgur.com/88oSmeX.jpg",
    username: "user1",
    status: "Slacking Slack"
  },
  {
    id: "a9",
    avatar: "https://i.imgur.com/tLljw1z.jpg",
    username: "user1",
    status: "Slacking Slack"
  }
];

export default function InviteFriends() {
  return (
    <div className="InviteFriends--container">
      <h4>Invite friends on Playnow</h4>
      <InviteList users={friends} />
    </div>
  );
}
