import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import Text from "../comp/Text";
import RequestCard from "../comp/InfoCards/RequestCard";
import AvatarDeck from "../comp/AvatarDeck";
import RoomIcon from "../comp/RoomIcon";
import ChannelCard from "../comp/Channel/ChannelCard";
import ChannelsPanel from "../comp/Channel/ChannelsPanel";
import FriendsPanel from "../comp/FriendsPanel";
import PopupMenu from "../comp/PopupMenu";
import ManageUsers from "../comp/ManageUsers";
import ChatPanel from "../comp/Chat/ChatPanel";
import CircleCheckBox from "../comp/CircleCheckbox";
import AnonymousSidebar from "../comp/AnonymousSidebar";
import Tag from "../comp/Tag";
import VideoPlayer from "../comp/VideoPlayer";
import RecommendedChannels from "../comp/Channel/RecommendedChannels";
import RecommendedVideos from "../comp/RecommendedVideos";
import DefaultLayout from "../comp/DefaultLayout";
import VideoChannelHeader from "../comp/VideoChannelHeader";
import {
  testChannels,
  testRooms,
  testUsers,
  testUserMinimal,
  testMessages
} from "./seed-arrays";
import SiteHeader from "../comp/SiteHeader";

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
// const Container2 = styled.div`
//   display: grid;
//   /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
//   grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//   justify-items: center;
//   justify-items: center;
//   align-items: center;
//   row-gap: 25px;
//   /* gap: 20px; */
// `;

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

export const DefaultLayoutTest = () => {
  const { selectedChannel, setSelectedChannel } = useState(null);
  return (
    <DefaultLayout>
      <div className="flex">
        <div className="w-3/12">
          <ChannelsPanel
            channels={testChannels}
            friends={testUsers}
            selected={selectedChannel}
            handleSelect={id => setSelectedChannel(id)}
          />
        </div>
        <div className="w-6/12">
          <VideoChannelHeader />
        </div>
        <div className="w-3/12"></div>
      </div>
    </DefaultLayout>
  );
};

export const CircleCheckBoxTest = () => {
  const [checked, setChecked] = useState(true);

  const onChange = () => {
    setChecked(!checked);
  };

  return <CircleCheckBox checked={checked} onChange={onChange} />;
};

export const TagTest = () => {
  const handleCancel = id => {
    console.log(`Cancel ${id}`);
  };

  return <Tag id={1} name="Testing" handleCancel={handleCancel} />;
};

export const AnonymousSidebarTest = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <AnonymousSidebar link="https://popitalk.com" handleSubmit={handleSubmit} />
  );
};

export const RequestCard123 = () => {
  // const [input, setInput] = useState("");

  const handleProfile = id => {
    console.log(`PROFILE ${id}`);
  };

  const handleAccept = () => {
    console.log("ACCEPT");
  };

  const handleReject = () => {
    console.log("REJECT");
  };

  return (
    <>
      {testUsers.map((u, i) => {
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
        online={true}
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

  return (
    <div className="p-5 bg-secondaryBackground">
      <ChannelsPanel
        channels={testChannels}
        friends={testUsers}
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

  return (
    <div className="p-5 bg-secondaryBackground">
      <FriendsPanel
        roomsResults={testRooms}
        channels={testChannels}
        selected={selectedChannel}
        handleSelect={id => setSelectedChannel(id)}
        userSearchResults={testUsers}
        handleAccept={handleAccept}
        handleReject={handleReject}
        handleProfile={handleProfile}
      />
    </div>
  );
};

export const PopupMenu123 = () => {
  // const [selectedRoom, setSelectedRoom] = useState(null);

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
        users={testUsers}
        options={options}
        handleProfile={handleProfile}
      />
    </div>
  );
};

export const SiteHeaderShow = () => {
  return <SiteHeader isWelcome={false} />;
};

export const ChannelChatPanel = () => {
  const typers = testUserMinimal;

  const handleDelete = id => {
    console.log(`Deleting message ${id}`);
  };

  const handleResend = message => {
    console.log("Resending message");
    console.log(message);
  };

  return (
    <ChatPanel
      messages={testMessages}
      typerIDs={typers.map(t => t.id)}
      typerAvatars={typers.map(t => t.avatar)}
      handleResend={handleResend}
      handleDelete={handleDelete}
    />
  );
};

export const VideoPlayerShow = () => {
  return <VideoPlayer />;
};

const list = [
  {
    title: "Following Channels",
    channels: testChannels
  },
  {
    title: "Recommended Channels",
    channels: testChannels
  },
  {
    title: "Channels Friends are following",
    channels: testChannels
  },
  {
    title: "Trending Channels right now",
    channels: testChannels
  }
];

export function RecommendedChannelsSection() {
  return <RecommendedChannels list={list} />;
}

const videoList = [
  {
    title: "Videos friends are watching",
    channels: testChannels
  },
  {
    title: "Recommended",
    channels: testChannels
  },
  {
    title: "Trending right now",
    channels: testChannels
  }
];

export function RecommendedVideoSection() {
  return <RecommendedVideos list={videoList} />;
}
