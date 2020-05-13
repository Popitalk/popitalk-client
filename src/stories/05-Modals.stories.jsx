import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import EditInformationModal from "../comp/EditInformationModal";
import ChangePasswordModal from "../comp/ChangePasswordModal";
import ForgotPasswordModal from "../comp/ForgotPasswordModal";
import CreateNewAccountModal from "../comp/CreateNewAccountModal";
import ModalManager from "../comp/ModalManager";
import ContainerHeader from "../comp/ContainerHeader";
import RoomExistsModal from "../comp/RoomExistsModal";
import SearchHeader from "../comp/SearchHeader";
import FollowersList from "../comp/InfoCardLists/FollowersList";
import WatchModal from "../comp/WatchModal";
import ShareModal from "../comp/ShareModal";
import NewRoomModal from "../comp/NewRoomModal";

export default {
  title: "Modals",
  decorators: [withKnobs]
};

const handleBack = () => {
  console.log("RETURN");
};

const filterSearch = searchTerm => {
  console.log(searchTerm);
};

const onCheck = (selected, setSelected, id) => {
  const index = selected.indexOf(id);
  if (index >= 0) {
    setSelected(selected.filter(i => i !== id));
  } else {
    setSelected([...selected, id]);
  }
};

const handleSend = selected => {
  if (selected.length > 0) {
    console.log(selected);
  } else {
    console.log("You haven't selected any rooms!");
  }
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
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 3,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 4,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  },
  {
    id: 5,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg"
  }
];

export const CreateNewAccountModalTest = () => {
  return (
    <ModalManager isOpen={true} fullHeight={true}>
      <CreateNewAccountModal />
    </ModalManager>
  );
};

export const EditInformationModalTest = () => {
  return (
    <ModalManager
      isOpen={true}
      fullHeight={true}
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
      header={
        <ContainerHeader title="Forgot Password" handleBack={handleBack} />
      }
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

  return (
    <ModalManager
      isOpen={true}
      header={<SearchHeader title="Share" filterSearch={filterSearch} />}
    >
      <ShareModal
        rooms={testRooms}
        selected={selected}
        onCheck={id => onCheck(selected, setSelected, id)}
        handleSend={() => handleSend(selected)}
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

  return (
    <ModalManager
      isOpen={true}
      header={
        <SearchHeader
          title="Select Friends to Invite"
          filterSearch={filterSearch}
        />
      }
    >
      <NewRoomModal
        users={testUsers}
        selected={selected}
        onCheck={id => onCheck(selected, setSelected, id)}
        handleSend={() => handleSend(selected)}
      />
    </ModalManager>
  );
};
