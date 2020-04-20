import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import Button from "../comp/Button";
import Text from "../comp/Text";
import Input from "../comp/Input";
import ChannelSettingsSidebar from "../comp/ChannelSettingsSidebar";
import RequestCard from "../comp/RequestCard";
import UserSearchResults from "../comp/UserSearchResults";
import AvatarDeck from "../comp/AvatarDeck";
import RoomIcon from "../comp/RoomIcon";
import ChannelCard from "../comp/ChannelCard";
import ChannelsList from "../comp/ChannelsList";
import RoomsList from "../comp/RoomsList";
import ChannelsPanel from "../comp/ChannelsPanel";
import FriendsPanel from "../comp/FriendsPanel";
import ChannelForm from "../comp/ChannelForm";
import PopupMenu from "../comp/PopupMenu";
import UsersList from "../comp/UsersList";
import ManageUsers from "../comp/ManageUsers";

export default {
  title: "Components",
  decorators: [withKnobs]
};

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
  /* justify-items: center; */
  /* justify-items: center; */
  /* align-items: center; */
  /* row-gap: 25px; */
  height: 100%;
  padding: 20px;
  background-color: #fff;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Container2 = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
  justify-items: center;
  align-items: center;
  row-gap: 25px;
  /* gap: 20px; */
`;

// const Container = styled.div`
//   /* display: flex; */
//   /* flex-direction: column; */
//   /* justify-content: center; */
//   /* align-items: center; */
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//   justify-items: center;
//   align-items: center;
//   row-gap: 25px;
//   padding: 20px;
//   background-color: #fff;
//   /* & > *:not(:last-child) {
//     margin-bottom: 20px;
//   } */
// `;

export const ChannelSettingsSidebar123 = () => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Switch>
        <Route path="/">
          <ChannelSettingsSidebar
            tabs={[
              { name: "Channel Settings", link: "/general" },
              { name: "Manage Admins", link: "/admins" },
              { name: "Manage Banned Users", link: "/banned" },
              { name: "Manage Members", link: "/members" }
            ]}
          />
        </Route>
      </Switch>
    </Container>
  );
};

export const RequestCard123 = () => {
  const [input, setInput] = useState("");

  const handleProfile = () => {
    console.log("PROFILE");
  };

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  return (
    <Container>
      <RequestCard
        username="Andrew"
        firstName="Andrew"
        lastName="Jang"
        avatar="https://i.imgur.com/xCGu56D.jpg"
        handleProfile={handleProfile}
        handleAccept={handleAccept}
        handleReject={handleReject}
        variant="stranger"
      />
      <RequestCard
        username="Andrew"
        firstName="Andrew"
        lastName="Jang"
        avatar="https://i.imgur.com/xCGu56D.jpg"
        handleProfile={handleProfile}
        handleAccept={handleAccept}
        variant="sentFriendRequest"
      />
      <RequestCard
        username="Andrew"
        firstName="Andrew"
        lastName="Jang"
        avatar="https://i.imgur.com/xCGu56D.jpg"
        handleProfile={handleProfile}
        handleAccept={handleAccept}
        variant="receivedFriendRequest"
      />
      <RequestCard
        username="Andrew"
        firstName="Andrew"
        lastName="Jang"
        avatar="https://i.imgur.com/xCGu56D.jpg"
        handleProfile={handleProfile}
        handleAccept={handleAccept}
        variant="friend"
      />
      <RequestCard
        username="Andrew"
        firstName="Andrew"
        lastName="Jang"
        avatar="https://i.imgur.com/xCGu56D.jpg"
        handleProfile={handleProfile}
        handleAccept={handleAccept}
        variant="self"
      />
    </Container>
  );
};

export const UserSearchResults123 = () => {
  const [input, setInput] = useState("");

  const handleProfile = () => {
    console.log("PROFILE");
  };

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  const results = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "stranger"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "friend"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "self"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "receivedFriendRequest"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "sentFriendRequest"
    }
  ];

  return (
    <Container>
      <UserSearchResults results={results} />
    </Container>
  );
};

export const AvatarDeck123 = () => {
  return (
    <Container>
      <AvatarDeck
        size="sm"
        avatars={[
          "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
          "https://i.imgur.com/xCGu56D.jpg",
          "https://i.imgur.com/MQHYB.jpg",
          "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
          "https://i.imgur.com/xCGu56D.jpg",
          "https://i.imgur.com/MQHYB.jpg"
        ]}
      />
      <AvatarDeck
        size="md"
        avatars={[
          "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
          "https://i.imgur.com/xCGu56D.jpg",
          "https://i.imgur.com/MQHYB.jpg",
          "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
          "https://i.imgur.com/xCGu56D.jpg",
          "https://i.imgur.com/MQHYB.jpg"
        ]}
      />
      <AvatarDeck
        size="lg"
        avatars={[
          "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
          "https://i.imgur.com/xCGu56D.jpg",
          "https://i.imgur.com/MQHYB.jpg",
          "https://i.kym-cdn.com/entries/icons/facebook/000/003/629/1282839532626.jpg",
          "https://i.imgur.com/xCGu56D.jpg",
          "https://i.imgur.com/MQHYB.jpg"
        ]}
      />
    </Container>
  );
};
export const RoomIcon123 = () => {
  return (
    <div className="p-5 grid grid-cols-4 gap-4">
      <RoomIcon
        size="sm"
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="md"
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="lg"
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="xl"
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="sm"
        watching={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="md"
        watching={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="lg"
        watching={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="xl"
        watching={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="xl"
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog"
        ]}
      />
      <RoomIcon
        size="xl"
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog",
          "https://source.unsplash.com/128x128/?3,dog"
        ]}
      />
      <RoomIcon
        size="xl"
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog",
          "https://source.unsplash.com/128x128/?3,dog",
          "https://source.unsplash.com/128x128/?4,dog"
        ]}
      />
      <RoomIcon
        size="xl"
        images={["https://source.unsplash.com/128x128/?1,dog"]}
        self={true}
      />
      <RoomIcon
        size="xl"
        watching={true}
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog"
        ]}
      />
      <RoomIcon
        size="xl"
        watching={true}
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog",
          "https://source.unsplash.com/128x128/?3,dog"
        ]}
      />
      <RoomIcon
        size="xl"
        watching={true}
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog",
          "https://source.unsplash.com/128x128/?3,dog",
          "https://source.unsplash.com/128x128/?4,dog"
        ]}
      />
      <RoomIcon
        size="lg"
        watching={true}
        images={[
          "https://source.unsplash.com/128x128/?1,dog",
          "https://source.unsplash.com/128x128/?2,dog",
          "https://source.unsplash.com/128x128/?3,dog",
          "https://source.unsplash.com/128x128/?4,dog"
        ]}
      />
      <RoomIcon
        size="xl"
        notifications={2}
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="xl"
        notifications={12}
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
      <RoomIcon
        size="xl"
        notifications={120}
        online={true}
        images={["https://source.unsplash.com/128x128/?1,dog"]}
      />
    </div>
  );
};

export const ChannelCard123 = () => {
  return (
    <div className="p-5 grid grid-cols-2">
      <ChannelCard
        id={123}
        name="Thelmo Society"
        icon="https://i.imgur.com/xCGu56D.jpg"
        avatars={[
          "https://source.unsplash.com/128x128/?1,cat",
          "https://source.unsplash.com/128x128/?2,cat",
          "https://source.unsplash.com/128x128/?3,cat",
          "https://source.unsplash.com/128x128/?4,cat"
        ]}
        live={false}
        videoTitle="Video Title"
        videoSource="youtube"
        videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
        handleFollow={() => console.log("FOLLOW")}
      />
      <ChannelCard
        id={123}
        name="Thelmo Society"
        icon="https://i.imgur.com/xCGu56D.jpg"
        avatars={[
          "https://source.unsplash.com/128x128/?1,cat",
          "https://source.unsplash.com/128x128/?2,cat",
          "https://source.unsplash.com/128x128/?3,cat",
          "https://source.unsplash.com/128x128/?4,cat"
        ]}
        live={true}
        videoTitle="Video Title"
        videoSource="youtube"
        videoThumbnail="https://i.imgur.com/aqjzchq.jpg"
        handleFollow={() => console.log("FOLLOW")}
      />
    </div>
  );
};

export const ChannelsList123 = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channels = [
    {
      id: 1,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: false,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 2,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 3,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: false
    },
    {
      id: 4,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    }
  ];
  return (
    <div className="p-5">
      <ChannelsList
        channels={channels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
      />
    </div>
  );
};

export const ChannelsPanel123 = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channels = [
    {
      id: 1,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: false,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 2,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 3,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    }
  ];

  return (
    <div className="p-5">
      <ChannelsPanel
        channels={channels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
      />
    </div>
  );
};

export const FriendsPanel123 = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleProfile = () => {
    console.log("PROFILE");
  };

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  const results = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "stranger"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "friend"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "self"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "receivedFriendRequest"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      handleProfile: handleProfile,
      handleAccept: handleAccept,
      handleReject: handleReject,
      variant: "sentFriendRequest"
    }
  ];

  const channels = [
    {
      id: 1,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: false,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 2,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 3,
      name: "League of Legends",
      icon: "https://source.unsplash.com/128x128/?1,dog",
      watching: true,
      avatars: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    }
  ];

  return (
    <div className="p-5">
      <FriendsPanel
        channels={channels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
        userSearchResults={results}
      />
    </div>
  );
};
export const RoomsList123 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Andrew",
      self: true,
      online: false,
      watching: false,
      notifications: null,
      message: null,
      images: ["https://source.unsplash.com/128x128/?1,cat"]
    },
    {
      id: 2,
      name: "Alex",
      self: false,
      online: false,
      watching: false,
      notifications: 23,
      message: null,
      images: ["https://source.unsplash.com/128x128/?2,cat"]
    },
    {
      id: 3,
      name: "John, Paul, Andrew, Jer...",
      self: false,
      online: false,
      watching: false,
      notifications: null,
      message: "You: ABCD",
      images: [
        "https://source.unsplash.com/128x128/?1,cat",
        "https://source.unsplash.com/128x128/?2,cat",
        "https://source.unsplash.com/128x128/?3,cat",
        "https://source.unsplash.com/128x128/?4,cat"
      ]
    },
    {
      id: 4,
      name: "Rick, Tom, Stewart",
      self: false,
      online: false,
      watching: true,
      notifications: 2,
      message: "Tom: xyzxyz",
      images: [
        "https://source.unsplash.com/128x128/?6,cat",
        "https://source.unsplash.com/128x128/?7,cat",
        "https://source.unsplash.com/128x128/?8,cat"
      ]
    }
  ];
  return (
    <div className="p-5">
      <RoomsList
        rooms={rooms}
        selected={selectedRoom}
        handleSelect={id => setSelectedRoom(id)}
      />
    </div>
  );
};

export const ChannelForm123 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="p-5 bg-secondaryBackground flex justify-center ">
      <ChannelForm
        initial={{
          name: "",
          description: "",
          private: false,
          icon: null
        }}
      />
    </div>
  );
};
export const PopupMenu123 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="p-5 grid grid-cols-3 items-end justify-end">
      <PopupMenu
        options={[
          {
            name: "Add Friend",
            handler: () => {
              console.log("aaa");
            }
          },
          {
            name: "Unfriend",
            handler: () => {
              console.log("bbb");
            }
          },
          {
            name: "Block User",
            handler: () => {
              console.log("ccc");
            }
          }
        ]}
        className="ml-auto"
      />
      <PopupMenu
        options={[
          {
            name: "Admin",
            handler: () => {
              console.log("aaa");
            }
          },
          {
            name: "Ban",
            handler: () => {
              console.log("bbb");
            }
          }
        ]}
        className="ml-auto"
      />
    </div>
  );
};

export const UsersList123 = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const users = [
    {
      id: 1,
      username: "abc11",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      owner: false
    },
    {
      id: 2,
      username: "abc22",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      owner: false
    },
    {
      id: 3,
      username: "abc33",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?3,cat",
      owner: true
    },
    {
      id: 4,
      username: "abc44",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?4,cat",
      owner: false
    }
  ];

  const options = [
    { name: "Admin", handler: userId => console.log("ADMIN", userId) },
    { name: "Ban", handler: userId => console.log("BAN", userId) }
  ];

  const handleProfile = userId => {
    console.log("PROFILE", userId);
  };

  return (
    <div className="p-5">
      <UsersList
        variant="manage"
        users={users}
        options={options}
        handleProfile={handleProfile}
      />
    </div>
  );
};

export const ManageUsers123 = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const users = [
    {
      id: 1,
      username: "abc11",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?1,cat",
      owner: false
    },
    {
      id: 2,
      username: "abc22",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?2,cat",
      owner: false
    },
    {
      id: 3,
      username: "abc33",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?3,cat",
      owner: true
    },
    {
      id: 4,
      username: "abc44",
      firstName: "Sul",
      lastName: "man",
      avatar: "https://source.unsplash.com/128x128/?4,cat",
      owner: false
    }
  ];

  const options = [
    { name: "Admin", handler: userId => console.log("ADMIN", userId) },
    { name: "Ban", handler: userId => console.log("BAN", userId) }
  ];

  const handleProfile = userId => {
    console.log("PROFILE", userId);
  };

  return (
    <div className="p-5">
      <ManageUsers
        variant="manage"
        category="Banned Members"
        users={users}
        options={options}
        handleProfile={handleProfile}
      />
    </div>
  );
};