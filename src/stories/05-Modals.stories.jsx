import React from "react";
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

export default {
  title: "Modals",
  decorators: [withKnobs]
};

const handleBack = () => {
  console.log("RETURN");
};

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
  const filterSearch = searchTerm => {
    console.log(searchTerm);
  };

  const handleProfile = id => {
    console.log(`Profile ${id}`);
  };

  const users = [
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

  return (
    <ModalManager
      isOpen={true}
      small={true}
      header={<SearchHeader title="Following" filterSearch={filterSearch} />}
    >
      <FollowersList users={users} handleProfile={handleProfile} />
    </ModalManager>
  );
};
