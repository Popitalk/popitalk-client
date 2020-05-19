import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import EditInformationModal from "../comp/EditInformationModal";
import ChangePasswordModal from "../comp/ChangePasswordModal";
import ForgotPasswordModal from "../comp/ForgotPasswordModal";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import ModalManager from "../comp/ModalManager";
import ContainerHeader from "../comp/ContainerHeader";
import RoomExistsModal from "../comp/RoomExistsModal";
import SearchHeader from "../comp/SearchHeader";
import FollowersList from "../comp/InfoCardLists/FollowersList";
import WatchModal from "../comp/WatchModal";
import ShareModal from "../comp/ShareModal";
import NewRoomModal from "../comp/NewRoomModal";
import ProfileModal from "../comp/ProfileModal";
import InviteForm from "../comp/InviteForm";

export default {
  title: "Modals",
  decorators: [withKnobs]
};

const handleBack = () => {
  console.log("RETURN");
};

const filterSearch = (list, field, setVisible, searchTerm) => {
  const filteredItems = list.filter(i =>
    i[field].toLowerCase().includes(searchTerm.toLowerCase())
  );

  setVisible(filteredItems);
};

const onCheck = (selected, setSelected, id, name) => {
  const index = selected.findIndex(i => i.id === id);
  if (index >= 0) {
    setSelected(selected.filter(i => i.id !== id));
  } else {
    setSelected([...selected, { id: id, name: name }]);
  }
};

const handleCancel = (selected, setSelected, id) => {
  setSelected(selected.filter(i => i.id !== id));
};

const handleSend = (selected, items) => {
  if (selected.length > 0) {
    console.log(selected);
  } else {
    console.log(`You haven't selected any ${items}!`);
  }
};

const friendHandler = id => {
  console.log(`Friended ${id}`);
};

const unfriendHandler = id => {
  console.log(`Unfriended ${id}`);
};

const blockHandler = id => {
  console.log(`Blocked ${id}`);
};

const testRooms = [
  {
    id: 1,
    name: "Andrew",
    self: true,
    online: false,
    watching: false,
    notifications: null,
    message: null,
    images: ["https://source.unsplash.com/128x128/?1,cat"],
    messageSent: "1m"
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
    ],
    messageSent: "Today"
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
    ],
    messageSent: "1/5/2019"
  }
];

const testUsers = [
  {
    id: 1,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 2,
    username: "SilentFuzzle",
    firstName: "Emily",
    lastName: "Palmieri",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 3,
    username: "Test",
    firstName: "Test",
    lastName: "Test",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 4,
    username: "Nester",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 5,
    username: "SandPills",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  }
];

const defaultThumbnail = "https://i.imgur.com/aqjzchq.jpg";
const testQueue = [
  {
    id: 1,
    title: "Video 1",
    views: "20k views",
    timeFromUpload: "2 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 10min"
  },
  {
    id: 2,
    title: "Video 2",
    views: "1M views",
    timeFromUpload: "1 week ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 14min"
  },
  {
    id: 3,
    title: "Video 3",
    views: "200k views",
    timeFromUpload: "1 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 18min"
  },
  {
    id: 4,
    title: "Video 4",
    views: "1.2M views",
    timeFromUpload: "3 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 25min"
  },
  {
    id: 5,
    title: "Video 5",
    views: "1.2M views",
    timeFromUpload: "3 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 50min"
  }
];

export const CreateNewAccountModalTest = () => {
  return (
    <ModalManager isOpen={true}>
      <CreateNewAccountForm />
    </ModalManager>
  );
};

export const EditInformationModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      header={
        <ContainerHeader
          title="Edit Your Information"
          handleBack={handleBack}
        />
      }
    >
      <EditInformationModal
        handleBack="test"
        username="Silent Fuzzle"
        initial={{
          firstName: "",
          lastName: "",
          dateOfBirth: new Date(),
          email: ""
        }}
        informationUpdated={true}
      />
    </ModalManager>
  );
};

export const ChangePasswordModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      small={true}
      header={
        <ContainerHeader title="Change Password" handleBack={handleBack} />
      }
    >
      <ChangePasswordModal handleBack="test" passwordUpdated={true} />
    </ModalManager>
  );
};

export const ForgotPasswordModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      small={true}
      header={<ContainerHeader title="Forgot Password" />}
    >
      <ForgotPasswordModal confirmEmailSent={true} />
    </ModalManager>
  );
};

export const RoomExistsModalTest = () => {
  const createNewHandler = () => {
    console.log("Create New Room");
  };

  const openRoomHandler = id => {
    console.log(`Open Room ${id}`);
  };

  const room = {
    id: 1,
    name: "Andrew",
    self: true,
    online: false,
    watching: false,
    notifications: null,
    message: "You: ABCD",
    images: ["https://source.unsplash.com/128x128/?1,cat"],
    messageSent: "1m"
  };

  return (
    <ModalManager isOpen={true} background="gray" small={true}>
      <RoomExistsModal
        room={room}
        openRoomHandler={openRoomHandler}
        createNewHandler={createNewHandler}
      />
    </ModalManager>
  );
};

export const FollowersModalTest = () => {
  const handleProfile = id => {
    console.log(`Profile ${id}`);
  };

  return (
    <ModalManager
      isOpen={true}
      small={true}
      header={<SearchHeader title="Following" filterSearch={filterSearch} />}
    >
      <FollowersList users={testUsers} handleProfile={handleProfile} />
    </ModalManager>
  );
};

export const WatchModalTest = () => {
  const handleWatchNow = id => {
    console.log(`Open Room ${id} and watch`);
  };

  return (
    <ModalManager
      isOpen={true}
      header={<SearchHeader title="Watch" filterSearch={filterSearch} />}
    >
      <WatchModal
        rooms={testRooms}
        handleWatchNow={handleWatchNow}
        id={123}
        title="Video Title"
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
      />
    </ModalManager>
  );
};

export const ShareModalTest = () => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(testRooms);

  return (
    <ModalManager
      isOpen={true}
      header={
        <SearchHeader
          title="Share"
          tags={selected}
          handleCancel={id => handleCancel(selected, setSelected, id)}
          filterSearch={searchTerm =>
            filterSearch(testRooms, "name", setVisible, searchTerm)
          }
        />
      }
    >
      <ShareModal
        rooms={visible}
        selected={selected}
        onCheck={(id, name) => onCheck(selected, setSelected, id, name)}
        handleSend={() => handleSend(selected, "rooms")}
        id={123}
        title="Video Title"
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
      />
    </ModalManager>
  );
};

export const NewRoomModalTest = () => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(testUsers);

  return (
    <ModalManager
      isOpen={true}
      header={
        <SearchHeader
          title="Select Friends to Invite"
          tags={selected}
          handleCancel={id => handleCancel(selected, setSelected, id)}
          filterSearch={searchTerm =>
            filterSearch(testUsers, "username", setVisible, searchTerm)
          }
        />
      }
    >
      <NewRoomModal
        users={visible}
        selected={selected}
        onCheck={(id, name) => onCheck(selected, setSelected, id, name)}
        handleSend={() => handleSend(selected, "friends")}
      />
    </ModalManager>
  );
};

export const StrangerProfileModalTest = () => {
  return (
    <ModalManager isOpen={true}>
      <ProfileModal
        user={testUsers[0]}
        showAddFriend={true}
        following={6}
        followers={22}
        friends={12}
        recentVideos={testQueue}
        followedChannels={testQueue}
        friendHandler={friendHandler}
        unfriendHandler={unfriendHandler}
        blockHandler={blockHandler}
      />
    </ModalManager>
  );
};

export const FriendProfileModalTest = () => {
  return (
    <ModalManager isOpen={true}>
      <ProfileModal
        user={testUsers[0]}
        following={6}
        followers={22}
        friends={12}
        recentVideos={testQueue}
        followedChannels={testQueue}
        friendHandler={friendHandler}
        unfriendHandler={unfriendHandler}
        blockHandler={blockHandler}
      />
    </ModalManager>
  );
};

export const MyProfileModalTest = () => {
  return (
    <ModalManager isOpen={true}>
      <ProfileModal
        user={testUsers[0]}
        myProfile={true}
        following={6}
        followers={22}
        friends={12}
        recentVideos={testQueue}
        followedChannels={testQueue}
        friendHandler={friendHandler}
        unfriendHandler={unfriendHandler}
        blockHandler={blockHandler}
      />
    </ModalManager>
  );
};

export const InviteModalTest = () => {
  return (
    <ModalManager isOpen={true} small={true}>
      <InviteForm link="https://popitalk.com" />
    </ModalManager>
  );
};
