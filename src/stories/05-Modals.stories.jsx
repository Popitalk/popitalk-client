import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import EditInformationModal from "../comp/Modals/EditInformationModal";
import ChangePasswordModal from "../comp/Modals/ChangePasswordModal";
import ForgotPasswordModal from "../comp/Modals/ForgotPasswordModal";
import CreateNewAccountForm from "../comp/CreateNewAccountForm";
import ModalContainer from "../comp/Modals/ModalContainer";
import ContainerHeader from "../comp/ContainerHeader";
import RoomExistsModal from "../comp/Modals/RoomExistsModal";
import SearchHeader, { buildSearchInput } from "../comp/SearchHeader";
import FollowersList from "../comp/InfoCardLists/FollowersList";
import StretchList from "../comp/InfoCardLists/StretchList";
import WatchModal from "../comp/Modals/WatchModal";
import ShareModal from "../comp/Modals/ShareModal";
import NewRoomModal from "../comp/Modals/NewRoomModal";
import ProfileModal from "../comp/Modals/ProfileModal";
import DeleteMessageModal from "../comp/Modals/DeleteMessageModal";
import BlockedUsersModal from "../comp/Modals/BlockedUsersModal";
import InviteForm from "../comp/InviteForm";
import { buildTagInput } from "../comp/TagInput";
import {
  testUsers,
  testQueue,
  testMessages,
  generateTestUsers,
  generateImage,
  generateName
} from "./seed-arrays";
import {
  filterSearch,
  onCheck,
  handleEnter,
  handleCancel
} from "../helpers/functions";

export default {
  title: "Modals",
  decorators: [withKnobs]
};

const handleBack = () => {
  console.log("RETURN");
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

const generateTestRooms = () => {
  const numRooms = 100;
  let testRooms = [];

  const watching = Math.round(Math.random() * numRooms);

  for (let i = 0; i < numRooms; i++) {
    const numImages = Math.round(Math.random() * 3) + 1;

    let names = "";
    let images = [];
    for (let j = 0; j < numImages; j++) {
      images.push(generateImage());

      names += generateName();
      if (j !== numImages - 1) {
        names += ",";
      }
    }

    testRooms.push({
      id: i + 1,
      name: names,
      self: Math.round(Math.random()) === 1,
      online: Math.round(Math.random()) === 1,
      watching: watching === i,
      notifications:
        Math.round(Math.random()) === 0 ? null : Math.round(Math.random() * 50),
      message: `This is message ${i + 1}`,
      images: images,
      messageSent: `${Math.round(Math.random() * 58) + 1}m`
    });
  }

  return testRooms;
};

const generatedRooms = generateTestRooms();
const generatedUsers = generateTestUsers();

export const CreateNewAccountModalTest = () => {
  return (
    <ModalContainer isOpen={true}>
      <div className="p-4 overflow-auto">
        <CreateNewAccountForm />
      </div>
    </ModalContainer>
  );
};

export const EditInformationModalTest = () => {
  return (
    <ModalContainer
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
    </ModalContainer>
  );
};

export const ChangePasswordModalTest = () => {
  return (
    <ModalContainer
      isOpen={true}
      small={true}
      header={
        <ContainerHeader title="Change Password" handleBack={handleBack} />
      }
    >
      <ChangePasswordModal handleBack="test" passwordUpdated={true} />
    </ModalContainer>
  );
};

export const ForgotPasswordModalTest = () => {
  return (
    <ModalContainer
      isOpen={true}
      small={true}
      header={<ContainerHeader title="Forgot Password" />}
    >
      <ForgotPasswordModal confirmEmailSent={true} />
    </ModalContainer>
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
    <ModalContainer isOpen={true} background="gray" small={true}>
      <RoomExistsModal
        room={room}
        openRoomHandler={openRoomHandler}
        createNewHandler={createNewHandler}
      />
    </ModalContainer>
  );
};

export const DeleteMessageModalTest = () => {
  const handleDelete = id => {
    console.log(`Deleteing message ${id}`);
  };

  const handleCancel = () => {
    console.log("Close modal");
  };

  let message = { ...testMessages[0] };
  message.me = true;

  return (
    <ModalContainer isOpen={true} small={true}>
      <DeleteMessageModal
        message={message}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    </ModalContainer>
  );
};

export const InviteModalTest = () => {
  return (
    <ModalContainer isOpen={true} small={true}>
      <div className="p-4">
        <InviteForm link="https://popitalk.com" />
      </div>
    </ModalContainer>
  );
};

export const WatchModalTest = () => {
  const handleWatchNow = id => {
    console.log(`Open Room ${id} and watch`);
  };

  const [visible, setVisible] = useState(generatedRooms);

  return (
    <ModalContainer
      isOpen={true}
      fixedFullSize={true}
      header={
        <SearchHeader
          title="Watch"
          filterSearch={searchTerm =>
            filterSearch(generatedRooms, "name", setVisible, searchTerm)
          }
          buildInput={buildSearchInput}
        />
      }
    >
      <WatchModal
        rooms={visible}
        handleWatchNow={handleWatchNow}
        id={123}
        title="Video Title"
        channelName="Channel Name"
        views="20K views"
        timeFromUpload="2 months ago"
        videoSource="youtube"
        thumbnail="https://i.imgur.com/aqjzchq.jpg"
      />
    </ModalContainer>
  );
};

export const ShareModalTest = () => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(generatedRooms);

  const nameField = "name";

  return (
    <ModalContainer
      isOpen={true}
      fixedFullSize={true}
      header={
        <SearchHeader
          title="Share"
          filterSearch={searchTerm =>
            filterSearch(generatedRooms, nameField, setVisible, searchTerm)
          }
          buildInput={buildTagInput(selected, id =>
            handleCancel(selected, setSelected, id)
          )}
          handleEnter={() =>
            handleEnter(selected, setSelected, visible, nameField)
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
    </ModalContainer>
  );
};

export const NewRoomModalTest = () => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(generatedUsers);

  const nameField = "username";

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      fixedFullSize={true}
      header={
        <SearchHeader
          title="Select Friends to Invite"
          filterSearch={searchTerm =>
            filterSearch(generatedUsers, nameField, setVisible, searchTerm)
          }
          buildInput={buildTagInput(selected, id =>
            handleCancel(selected, setSelected, id)
          )}
          handleEnter={() =>
            handleEnter(selected, setSelected, visible, nameField)
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
    </ModalContainer>
  );
};

export const UnblockUsersModalTest = () => {
  const [visible, setVisible] = useState(generatedUsers);

  const unblockUsers = id => {
    console.log(`Unblock user ${id}`);
  };

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      fixedFullSize={true}
      header={
        <SearchHeader
          title="Blocked Users"
          filterSearch={searchTerm =>
            filterSearch(generatedUsers, "username", setVisible, searchTerm)
          }
          buildInput={buildSearchInput}
        />
      }
    >
      <BlockedUsersModal users={visible} handleUnblock={unblockUsers} />
    </ModalContainer>
  );
};

export const FollowersModalTest = () => {
  const handleProfile = id => {
    console.log(`Profile ${id}`);
  };

  const [visible, setVisible] = useState(generatedUsers);

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      fixedFullSize={true}
      header={
        <SearchHeader
          title="Following"
          filterSearch={searchTerm =>
            filterSearch(generatedUsers, "username", setVisible, searchTerm)
          }
          buildInput={buildSearchInput}
        />
      }
    >
      <StretchList
        list={FollowersList}
        users={visible}
        handleProfile={handleProfile}
      />
    </ModalContainer>
  );
};

export const StrangerProfileModalTest = () => {
  return (
    <ModalContainer isOpen={true}>
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
    </ModalContainer>
  );
};

export const FriendProfileModalTest = () => {
  return (
    <ModalContainer isOpen={true}>
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
    </ModalContainer>
  );
};

export const MyProfileModalTest = () => {
  return (
    <ModalContainer isOpen={true}>
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
    </ModalContainer>
  );
};
