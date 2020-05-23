import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import Button from "../comp/Button";
import Text from "../comp/Text";
import Input from "../comp/Input";
import ChannelSettingsPanel from "../comp/ChannelSettingsPanel";
import ChannelSettingsSidebar from "../comp/ChannelSettingsSidebar";
import RequestCard from "../comp/InfoCards/RequestCard";
import AvatarDeck from "../comp/AvatarDeck";
import RoomIcon from "../comp/RoomIcon";
import ChannelCard from "../comp/ChannelCard";
import ChannelsPanel from "../comp/ChannelsPanel";
import FriendsPanel from "../comp/FriendsPanel";
import ChannelForm from "../comp/ChannelForm";
import PopupMenu from "../comp/PopupMenu";
import ManageUsers from "../comp/ManageUsers";
import SiteHeaderMain from "../comp/SiteHeaderMain";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";
import ChatPanel from "../comp/ChatPanel";
import CircleCheckBox from "../comp/CircleCheckbox";

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

const handleProfile = id => {
  console.log(`PROFILE ${id}`);
};

export const CircleCheckBoxTest = () => {
  const [checked, setChecked] = useState(true);

  const onChange = () => {
    setChecked(!checked);
  };

  return <CircleCheckBox checked={checked} onChange={onChange} />;
};

export const ChannelSettingsPanelTest = () => {
  const users = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "stranger"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "sentRequest"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "friend"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "self"
    }
  ];

  const deleteChannel = () => {
    console.log("Deleting channel");
  };

  const addAdmin = id => {
    console.log(`Adding admin ${id}`);
  };

  const removeAdmin = id => {
    console.log(`Removing admin ${id}`);
  };

  const kickUser = id => {
    console.log(`Kicking user ${id}`);
  };

  const addBan = id => {
    console.log(`Banning user ${id}`);
  };

  const removeBan = id => {
    console.log(`Unbanning user ${id}`);
  };

  return (
    <ChannelSettingsPanel
      followers={users}
      admins={users}
      bannedUsers={users}
      initialChannelForm={{
        name: "",
        description: "",
        private: false,
        icon: null
      }}
      handleProfile={handleProfile}
      handleDeleteChannel={deleteChannel}
      addAdminHandler={addAdmin}
      removeAdminHandler={removeAdmin}
      kickUserHandler={kickUser}
      addBanHandler={addBan}
      removeBanHandler={removeBan}
    />
  );
};

export const ChannelSettingsSidebar123 = () => {
  const [input, setInput] = useState("");

  const handleLink = link => {};

  const buttons = [
    {
      text: "Channel Settings",
      onClick: handleLink("/general"),
      selected: false
    },
    {
      text: "Manage Admins",
      onClick: handleLink("/admins"),
      selected: false
    },
    {
      text: "Manage Banned Users",
      onClick: handleLink("/banned"),
      selected: false
    },
    {
      text: "Manage Members",
      onClick: handleLink("/members"),
      selected: false
    }
  ];

  return (
    <Switch>
      <Route path="/">
        <ChannelSettingsSidebar buttons={buttons} />
      </Route>
    </Switch>
  );
};

export const RequestCard123 = () => {
  const [input, setInput] = useState("");

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  const users = [
    {
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "stranger"
    },
    {
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "sentRequest"
    },
    {
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "receivedRequest"
    },
    {
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "friend"
    },
    {
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "self"
    }
  ];

  return (
    <>
      {users.map((u, i) => {
        return (
          <div key={i} className="p-2">
            <RequestCard
              user={u}
              handleAccept={handleAccept}
              handleReject={handleReject}
              handleProfile={handleProfile}
            />
          </div>
        );
      })}
    </>
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
    <div className="grid grid-cols-4 gap-4 p-5">
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
    <div className="grid grid-cols-2 p-5">
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
      ],
      numOnline: 9001
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
      ],
      numOnline: 219
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
      ],
      numOnline: 0
    }
  ];
  const results = [
    {
      id: 1,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "friend"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "friend"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://images.unsplash.com/photo-1584404268984-89c43e841646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1408&q=80",
      variant: "self"
    },
    {
      id: 4,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      variant: "receivedRequest"
    },
    {
      id: 5,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=522&q=80",
      variant: "sentRequest"
    },
    // {
    //   id: 6,
    //   username: "Andrew",
    //   firstName: "Andrew",
    //   lastName: "Jang",
    //   avatar: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=522&q=80",
    //   variant: "sentRequest"
    // },
    // {
    //   id: 7,
    //   username: "Andrew",
    //   firstName: "Andrew",
    //   lastName: "Jang",
    //   avatar: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=522&q=80",
    //   variant: "sentRequest"
    // }
  ];

  return (
    <div className="p-5 bg-secondaryBackground">
      <ChannelsPanel
        channels={channels}
        friends={results}
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
      variant: "stranger"
    },
    {
      id: 2,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "stranger"
    },
    {
      id: 3,
      username: "Andrew",
      firstName: "Andrew",
      lastName: "Jang",
      avatar: "https://i.imgur.com/xCGu56D.jpg",
      variant: "stranger"
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

  const rooms = [
    {
      id: 1,
      name: "Andrew",
      self: true,
      online: false,
      watching: false,
      notifications: null,
      message: null,
      images: ["https://source.unsplash.com/128x128/?1,cat"],
      messageSent: "Today"
    },
    {
      id: 2,
      name: "Alex",
      self: false,
      online: false,
      watching: false,
      notifications: 23,
      message: null,
      images: ["https://source.unsplash.com/128x128/?2,cat"],
      messageSent: "2m"
    },
  ];

  return (
    <div className="p-5 bg-secondaryBackground">

      <FriendsPanel
        roomsResults={rooms}
        channels={channels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
        userSearchResults={results}
        handleAccept={handleAccept}
        handleReject={handleReject}
        handleProfile={handleProfile}
      />
    </div>
  );
};

export const ChannelForm123 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="flex justify-center p-5 bg-secondaryBackground ">
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
    <div className="grid items-end justify-end grid-cols-3 p-5">
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

export const ManageUsersTest = () => {
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

export const SiteHeader = () => {
  return (
    <>
      <Text variant="subtitle2">Main header</Text>
      <div className="border rounded-md">
        <SiteHeaderMain />
      </div>
      <Text className="mt-8" variant="subtitle2">
        Welcome header (not logged in)
      </Text>
      <div className="border rounded-md">
        <SiteHeaderWelcome />
      </div>
    </>
  );
};

export const ChannelChatPanel = () => {
  return <ChatPanel />;
};
