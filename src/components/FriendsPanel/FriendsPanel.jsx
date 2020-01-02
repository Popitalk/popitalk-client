import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useScroll } from "react-use";
import useOnClickOutside from "use-onclickoutside";
import ReactTooltip from "react-tooltip";
import {
  searchUsers,
  clearUserSearch,
  openProfileModal
} from "../../redux/actions";
import RoomIcon2 from "../RoomIcon2";
import Button1 from "../Button1";
import "./FriendsPanel.css";
// import { MODAL_PROFILE } from "../../helpers/constants";

const rooms = [
  {
    id: "a1",
    name: null,
    users: {
      id1: {
        username: "Andrew",
        avatar: "https://i.imgur.com/aqjzchq.jpg",
        online: true
      },
      id2: {
        username: "Lawrence",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: false
      },
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Andrew",
      message: "Hi lets watch an interesting video together"
    },
    watching: true
  },
  {
    id: "a2",
    name: "Team Playnow",
    users: {
      id1: {
        username: "Andrew",
        avatar: "https://i.imgur.com/aqjzchq.jpg",
        online: true
      },
      id2: {
        username: "Lawrence",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: false
      },
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: null,
    watching: false
  },
  {
    id: "a22",
    name: null,
    users: {
      id1: {
        username: "Andrew",
        avatar: "https://i.imgur.com/aqjzchq.jpg",
        online: true
      },
      id2: {
        username: "Lawrence",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: false
      },
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      },
      id4: {
        username: "Jason",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Andrew",
      message: "Hi lets watch an interesting video together"
    },
    watching: true
  },
  {
    id: "a22xxxx",
    name: null,
    users: {
      id1: {
        username: "Andrew",
        avatar: "https://i.imgur.com/aqjzchq.jpg",
        online: true
      },
      id2: {
        username: "Lawrence",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: false
      },
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      },
      id4: {
        username: "Jason",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Andrew",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  },
  {
    id: "a3",
    name: null,
    users: {
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Emma",
      message: "Hi lets watch an interesting video together"
    },
    watching: true
  },
  {
    id: "a3es",
    name: null,
    users: {
      id3: {
        username: "Jason",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Jason",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  },
  {
    id: "a3eaaa",
    name: null,
    users: {
      id3: {
        username: "Jason",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Jason",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  },
  {
    id: "a3ezz",
    name: null,
    users: {
      id3: {
        username: "Jason",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: null,
    watching: false
  },
  {
    id: "a3exx",
    name: null,
    users: {
      id3: {
        username: "Jason",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Jason",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  },
  {
    id: "a3ef",
    name: "A room",
    users: {
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      },
      id5: {
        username: "Jason",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Jason",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  },
  {
    id: "a3gfef",
    name: "A room",
    users: {
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      },
      id5: {
        username: "Jason",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Jason",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  },
  {
    id: "a3gfef4343",
    name: "A room",
    users: {
      id3: {
        username: "Emma",
        avatar: "https://i.imgur.com/tLljw1z.jpg",
        online: true
      },
      id5: {
        username: "Jason",
        avatar: "https://i.imgur.com/Y9waUNm.jpg",
        online: true
      }
    },
    lastMessage: {
      username: "Jason",
      message: "Hi lets watch an interesting video together"
    },
    watching: false
  }
];

export default function FriendsPanel({ unexpandable = false }) {
  const [shadow, setShadow] = useState(false);
  const scrollRef = useRef(null);
  const searchRef = useRef(null);
  const { y } = useScroll(scrollRef);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(unexpandable);
  const dispatch = useDispatch();
  const { users: searchedUsers, apiError } = useSelector(
    state => state.userSearchState
  );
  const { defaultAvatar } = useSelector(state => state.userState);
  // const modalComponent = useSelector(({ modalState }) => modalState.components);
  const [page, setPage] = useState(0);
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
                  />
                  <Button1>
                    <i className="fas fa-user-plus" />
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
        >
          <p>Your private room</p>
          <i className="fas fa-plus-square fa-2x" />
        </button>
        {rooms.map(room => {
          const users = Object.values(room.users);
          const images = users.map(user => user.avatar);
          const online = users.length === 1 && users[0].online;

          let roomName =
            room.name ||
            (users.length === 1
              ? users[0].username
              : users.map(user => user.username).join(", "));

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
            <div
              className="FriendsPanel--room"
              key={room.id}
              {...(!expanded && {
                "data-for": "FriendsPanel--tooltip",
                "data-tip": roomName,
                "data-iscapture": true
              })}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
