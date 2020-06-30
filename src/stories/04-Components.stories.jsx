import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import RequestCard from "../comp/InfoCards/RequestCard";
import AvatarDeck from "../comp/Controls/AvatarDeck";
import RoomIcon from "../comp/Controls/RoomIcon";
import ChannelCard from "../comp/Channel/ChannelCard";
import PopupMenu from "../comp/Controls/PopupMenu";
import ManageUsers from "../comp/ManageUsers";
import ChatPanel from "../comp/Chat/ChatPanel";
import CircleCheckBox from "../comp/Controls/CircleCheckbox";
import Tag from "../comp/Controls/Tag";
import VideoPlayer from "../comp/VideoPlayer";
import RecommendedVideos from "../comp/RecommendedVideos";

import {
  testChannels1,
  testChannels2,
  testChannels3,
  testUsers,
  testUserMinimal,
  testImages,
  generateTestMessages
} from "./seed-arrays";

import SiteHeaderMain from "../comp/SiteHeaderMain";
import SiteHeaderWelcome from "../comp/SiteHeaderWelcome";

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

const testMessages = generateTestMessages();

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
export const ProfileIcons = () => {
  return (
    <div>
      <h4 className="text-sm text-secondaryText">All In One</h4>
      <div className="grid grid-cols-4 gap-4 p-5">
        <RoomIcon size="lg" images={testImages} />
        <RoomIcon
          size="lg"
          watching={true}
          online={true}
          notifications={120}
          images={testImages}
        />
      </div>
      <h4 className="text-sm text-secondaryText">Icon Size</h4>
      <div className="grid grid-cols-4 gap-4 p-5">
        <RoomIcon size="sm" images={testImages} />
        <RoomIcon size="md" images={testImages} />
        <RoomIcon size="lg" images={testImages} />
        <RoomIcon size="xl" images={testImages} />
      </div>
      <h4 className="text-sm text-secondaryText">Watching Status</h4>
      <div className="grid grid-cols-4 gap-4 p-5">
        <RoomIcon size="lg" watching={true} images={testImages} />
      </div>
      <h4 className="text-sm text-secondaryText">Online Status</h4>
      <div className="grid grid-cols-4 gap-4 p-5">
        <RoomIcon size="lg" online={true} images={testImages} />
      </div>
      <h4 className="text-sm text-secondaryText">Number of people in a room</h4>
      <div className="grid grid-cols-4 gap-4 p-5">
        <RoomIcon size="xl" images={testImages} self={true} />
        <RoomIcon size="xl" images={testImages} />
        <RoomIcon size="xl" images={[testImages, testImages]} />
        <RoomIcon size="xl" images={[testImages, testImages, testImages]} />
        <RoomIcon
          size="xl"
          images={[testImages, testImages, testImages, testImages]}
        />
      </div>
      <h4 className="text-sm text-secondaryText">Notifications</h4>
      <div className="grid grid-cols-4 gap-4 p-5">
        <RoomIcon size="xl" notifications={2} images={testImages} />
        <RoomIcon size="xl" notifications={12} images={testImages} />
        <RoomIcon size="xl" notifications={120} images={testImages} />
      </div>
    </div>
  );
};

export const ChannelCard123 = () => {
  return (
    <div className="p-5 flex flex-wrap">
      <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
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
      </div>
      <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
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

export const SiteHeadersShow = () => {
  return (
    <>
      <SiteHeaderMain
        username="Test"
        avatar="https://source.unsplash.com/128x128/?4,cat"
      />

      <SiteHeaderWelcome />
    </>
  );
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
    <div className="h-screen">
      <ChatPanel
        messages={testMessages}
        typerIDs={typers.map(t => t.id)}
        typerAvatars={typers.map(t => t.avatar)}
        handleResend={handleResend}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export const VideoPlayerShow = () => {
  return <VideoPlayer />;
};

const videoList = [
  {
    title: "Videos friends are watching",
    channels: testChannels1
  },
  {
    title: "Recommended",
    channels: testChannels2
  },
  {
    title: "Trending right now",
    channels: testChannels3
  }
];

export function RecommendedVideoSection() {
  return <RecommendedVideos list={videoList} />;
}
