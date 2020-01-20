import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useScroll } from "react-use";
import { Link, useLocation } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
import ReactTooltip from "react-tooltip";
import {
  searchUsers,
  clearUserSearch,
  openProfileModal,
  sendFriendRequest,
  openCreateRoomModal
} from "../../redux/actions";
import RoomIcon2 from "../RoomIcon2";
import Button1 from "../Button1";
import "./FriendsPanel.css";
// import { MODAL_PROFILE } from "../../helpers/constants";

// const rooms = [
//   {
//     id: "a1",
//     name: null,
//     users: {
//       id1: {
//         username: "Andrew",
//         avatar: "https://i.imgur.com/aqjzchq.jpg",
//         online: true
//       },
//       id2: {
//         username: "Lawrence",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: false
//       },
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Andrew",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: true
//   },
//   {
//     id: "a2",
//     name: "Team Playnow",
//     users: {
//       id1: {
//         username: "Andrew",
//         avatar: "https://i.imgur.com/aqjzchq.jpg",
//         online: true
//       },
//       id2: {
//         username: "Lawrence",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: false
//       },
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: null,
//     watching: false
//   },
//   {
//     id: "a22",
//     name: null,
//     users: {
//       id1: {
//         username: "Andrew",
//         avatar: "https://i.imgur.com/aqjzchq.jpg",
//         online: true
//       },
//       id2: {
//         username: "Lawrence",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: false
//       },
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       },
//       id4: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Andrew",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: true
//   },
//   {
//     id: "a22xxxx",
//     name: null,
//     users: {
//       id1: {
//         username: "Andrew",
//         avatar: "https://i.imgur.com/aqjzchq.jpg",
//         online: true
//       },
//       id2: {
//         username: "Lawrence",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: false
//       },
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       },
//       id4: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Andrew",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   },
//   {
//     id: "a3",
//     name: null,
//     users: {
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Emma",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: true
//   },
//   {
//     id: "a3es",
//     name: null,
//     users: {
//       id3: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Jason",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   },
//   {
//     id: "a3eaaa",
//     name: null,
//     users: {
//       id3: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Jason",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   },
//   {
//     id: "a3ezz",
//     name: null,
//     users: {
//       id3: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: null,
//     watching: false
//   },
//   {
//     id: "a3exx",
//     name: null,
//     users: {
//       id3: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Jason",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   },
//   {
//     id: "a3ef",
//     name: "A room",
//     users: {
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       },
//       id5: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Jason",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   },
//   {
//     id: "a3gfef",
//     name: "A room",
//     users: {
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       },
//       id5: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Jason",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   },
//   {
//     id: "a3gfef4343",
//     name: "A room",
//     users: {
//       id3: {
//         username: "Emma",
//         avatar: "https://i.imgur.com/tLljw1z.jpg",
//         online: true
//       },
//       id5: {
//         username: "Jason",
//         avatar: "https://i.imgur.com/Y9waUNm.jpg",
//         online: true
//       }
//     },
//     lastMessage: {
//       username: "Jason",
//       message: "Hi lets watch an interesting video together"
//     },
//     watching: false
//   }
// ];

export default function FriendsPanel({ unexpandable = false }) {
  const [shadow, setShadow] = useState(false);
  const scrollRef = useRef(null);
  const searchRef = useRef(null);
  const { y } = useScroll(scrollRef);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(unexpandable);
  const dispatch = useDispatch();
  const location = useLocation();
  const { users: searchedUsers, apiError } = useSelector(
    state => state.userSearchState
  );
  const { users, channels } = useSelector(state => state.generalState);
  const {
    id: ownId,
    defaultAvatar,
    sentFriendRequests,
    receivedFriendRequests,
    friends
  } = useSelector(state => state.userState);
  // const modalComponent = useSelector(({ modalState }) => modalState.components);
  const [page, setPage] = useState(0);
  const openCreateRoomModalDispatcher = useCallback(
    () => dispatch(openCreateRoomModal()),
    [dispatch]
  );
  // const [dontCollapse, setDontCollapse] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (!unexpandable) {
      setExpanded(false);
    }
  });

  useEffect(() => {
    if (y !== 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, [y]);

  const activeRoom = location.pathname.split("/")[2];

  const hiddenRequests = [...friends, ...sentFriendRequests];

  // useEffect(() => {
  //   console.log("MODAL MODAL", modalComponent);
  //   // if (modalComponent.length !== 0) {
  //   // console.log("SETTED TO NOT COLLAPSE");
  //   setDontCollapse(true);
  //   // }
  // }, [modalComponent]);

  // const toggle = () => setExpanded(!expanded);

  // FriendsPanel.handleClickOutside = () => {
  // if (!unexpandable) {
  // setTimeout(() => {
  //   console.log("DONT OR NOT", dontCollapse, modalComponent);
  //   if (dontCollapse) {
  //     setDontCollapse(false);
  //   } else {
  //     setExpanded(false);
  //   }
  // }, 5000);
  // if (dontCollapse) {
  //   setDontCollapse(false);
  // } else {
  //   setExpanded(false);
  // }
  // setExpanded(false);
  // }
  // };

  const handleSubmit = () => {
    setSearch("");
  };

  const handleCreate = () => {
    console.log("CREATING ROOM");
  };

  const handleSearchSelect = () => {
    if (!expanded && !unexpandable) {
      setExpanded(true);
      setTimeout(() => {
        searchRef.current.focus();
      }, 50);
    } else {
      if (search.length > 2) {
        dispatch(searchUsers(search));
      }
    }
  };

  const handleSearchClear = () => {
    setSearch("");
    setPage(0);
    dispatch(clearUserSearch());
  };

  const handleProfileOpen = userId => {
    setExpanded(false);
    dispatch(openProfileModal(userId));
  };

  return (
    <div
      className={`FriendsPanel--container${
        expanded ? " FriendsPanel--expanded" : ""
      }${unexpandable ? " FriendsPanel--unexpandable" : ""}`}
      ref={ref}
    >
      <ReactTooltip
        place="left"
        effect="solid"
        className="FriendsPanel--tooltip"
        id="FriendsPanel--tooltip"
        event="mouseover mouseenter"
        eventOff="mouseleave mouseout scroll mousewheel"
      />
      <div
        className={`FriendsPanel--header${
          shadow ? " FriendsPanel--headerShadow" : ""
        }`}
        onClick={unexpandable ? undefined : () => setExpanded(!expanded)}
      >
        <i className="fas fa-user-friends fa-2x" />
        <h3>Friends</h3>
      </div>
      <div className="FriendsPanel--rooms" ref={scrollRef}>
        <div className="FriendsPanel--searchbar">
          <input
            type="text"
            placeholder="Search friends"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                handleSearchSelect();
              }
            }}
            maxLength={25}
            spellCheck={false}
            ref={searchRef}
          />
          <div>
            <button
              type="button"
              className="button round"
              onClick={handleSearchSelect}
              {...(!expanded && {
                "data-for": "FriendsPanel--tooltip",
                "data-tip": "Search friends",
                "data-iscapture": true
              })}
            >
              <i className={`fas fa-search${expanded ? "" : " fa-2x"}`} />
            </button>
          </div>
        </div>
        {search && (
          <div className="FriendsPanel--searching">
            <p>Searching: {search}</p>
            <p onClick={handleSearchClear}>Clear</p>
          </div>
        )}
        {expanded && apiError && (
          <div className="FriendsPanel--noUsersFounds">
            <p>No Users Found</p>
          </div>
        )}
        {searchedUsers.length !== 0 && (
          <>
            <div className="FriendsPanel--friendRequests">
              {searchedUsers.slice(page * 3, page * 3 + 3).map(user => (
                <div key={user.id}>
                  <div role="button" onClick={() => handleProfileOpen(user.id)}>
                    <p>{user.username}</p>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  <img
                    src={user.avatar || defaultAvatar}
                    alt="avatar"
                    onClick={() => handleProfileOpen(user.id)}
                    className={`${
                      ownId === user.id ? "FriendsPanel--avatar--yourself" : ""
                    }`}
                  />
                  <Button1
                    disabled={hiddenRequests.includes(user.id)}
                    onClick={
                      hiddenRequests.includes(user.id)
                        ? undefined
                        : () => dispatch(sendFriendRequest(user.id))
                    }
                    className={
                      receivedFriendRequests.includes(user.id)
                        ? "FriendsPanel--button--receivedFriendRequest"
                        : ""
                    }
                  >
                    <i
                      className={
                        friends.includes(user.id)
                          ? "fas fa-user-check"
                          : "fas fa-user-plus"
                      }
                    />
                  </Button1>
                </div>
              ))}
            </div>
            <div className="FriendsPanel--pages">
              <p
                className={`${page === 0 ? "FriendsPanel--pages--active" : ""}`}
                onClick={() => setPage(0)}
              >
                1
              </p>
              {searchedUsers.length > 3 && (
                <p
                  className={`${
                    page === 1 ? "FriendsPanel--pages--active" : ""
                  }`}
                  onClick={() => setPage(1)}
                >
                  2
                </p>
              )}
              {searchedUsers.length > 6 && (
                <p
                  className={`${
                    page === 2 ? "FriendsPanel--pages--active" : ""
                  }`}
                  onClick={() => setPage(2)}
                >
                  3
                </p>
              )}
            </div>
          </>
        )}
        <button
          type="button"
          className="button lg FriendsPanel--newRoom"
          {...(!expanded && {
            "data-for": "FriendsPanel--tooltip",
            "data-tip": "Your private room",
            "data-iscapture": true
          })}
          onClick={openCreateRoomModalDispatcher}
        >
          <p>Your private room</p>
          <i className="fas fa-plus-square fa-2x" />
        </button>
        {Object.entries(channels)
          .filter(([channelId, channel]) => channel.type === "room")
          .map(([roomId, room]) => {
            const roomUsers = room.users;
            const images =
              roomUsers.length === 2
                ? roomUsers
                    .filter(userId => userId !== ownId)
                    .map(userId => users[userId].avatar || defaultAvatar)
                : roomUsers
                    .sort((a, b) =>
                      users[a].username.toLowerCase() >
                      users[b].username.toLowerCase()
                        ? 1
                        : users[b].username.toLowerCase() >
                          users[a].username.toLowerCase()
                        ? -1
                        : 0
                    )
                    .map(userId => users[userId].avatar || defaultAvatar);
            const online = roomUsers.length === 1 && roomUsers[0].online;

            let roomName =
              room.name ||
              (roomUsers.length === 2
                ? users[roomUsers.filter(userId => userId !== ownId)[0]]
                    .username
                : roomUsers
                    .sort((a, b) =>
                      users[a].username.toLowerCase() >
                      users[b].username.toLowerCase()
                        ? 1
                        : users[b].username.toLowerCase() >
                          users[a].username.toLowerCase()
                        ? -1
                        : 0
                    )
                    .map(userId => users[userId].username)
                    .join(", "));

            if (roomName.length > 25) {
              roomName = `${roomName.slice(0, 25)}...`;
            }
            let roomMessage =
              room.lastMessage &&
              `${room.lastMessage.username}: ${room.lastMessage.message}`;

            if (roomMessage && roomMessage.length > 25) {
              roomMessage = `${roomMessage.slice(0, 25)}...`;
            }

            return (
              <Link
                className={`FriendsPanel--room${
                  activeRoom === roomId ? " FriendsPanel--activeRoom" : ""
                }`}
                key={roomId}
                {...(!expanded && {
                  "data-for": "FriendsPanel--tooltip",
                  "data-tip": roomName,
                  "data-iscapture": true
                })}
                to={`/rooms/${roomId}`}
              >
                <div className="FriendsPanel--nameAndMessage">
                  <p>{roomName}</p>
                  <p>{roomMessage}</p>
                </div>
                <RoomIcon2
                  images={images}
                  online={online}
                  watching={room.watching}
                  type={expanded ? "FriendsPanel" : "ChannelsPanel1"}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
