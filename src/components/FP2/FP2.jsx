import React, { useState } from "react";
import RoomIcon from "../RoomIcon";
import "./FP2.css";

const requests = [
  {
    id: "a1",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a2",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a3",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a4",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a5",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a6",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a7",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  },
  {
    id: "a8",
    username: "Andrew",
    fullName: "Andrew Jang",
    avatar: "https://i.imgur.com/aqjzchq.jpg"
  }
];

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
  }
];

export default function FP2() {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    setSearch("");
  };

  const handleCreate = () => {
    console.log("CREATING ROOM");
  };

  const handleSearchSelect = () => {
    // setExpanded(true);
  };
  return (
    <div className="FP2--container">
      <div className="FP2--header">
        <i className="fas fa-user-friends fa-2x" />
        <h3>Friends</h3>
      </div>
      <div className="FP2--shade" />
      <div className="FP2--rooms">
        <div className="FP2--shade2" />

        <div className="FP2--searchbar">
          <input
            type="text"
            placeholder="Search friends"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div>
            <button
              type="button"
              className="button round"
              onClick={handleSearchSelect}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>

        <div className="FP2--friendRequests">
          {requests.map(request => (
            <div key={request.id}>
              <div>
                <p>{request.username}</p>
                <p>{request.fullName}</p>
              </div>
              <img src={request.avatar} alt="avatar" />
              <button type="button" className="button round">
                <i className="fas fa-user-plus" />
              </button>
            </div>
          ))}
        </div>
        <button type="button" className="button lg FP2--newRoom">
          <p>Your private room</p>
          <i className="fas fa-plus-square fa-lg" />
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
            <div className="FP2--room" key={room.id}>
              <div className="FP2--nameAndMessage">
                <p>{roomName}</p>
                <p>{roomMessage}</p>
              </div>

              <RoomIcon
                images={images}
                online={online}
                watching={room.watching}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
