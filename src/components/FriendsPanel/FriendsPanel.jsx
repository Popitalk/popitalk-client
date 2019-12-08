import React, { useState } from "react";
import "./FriendsPanel.css";
import Input3 from "../Input3";
import RoomIcon from "../RoomIcon";

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

export default function FriendsPanel() {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    setSearch("");
  };

  const handleCreate = () => {
    console.log("CREATING ROOM");
  };

  return (
    <div className="FriendsPanel--container">
      <div className="FriendsPanel--header">
        <i className="fas fa-user-friends fa-2x" />
        <h3>Friends</h3>
      </div>
      <div className="FriendsPanel--input">
        <Input3
          placeholder="Search friends"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              handleSubmit();
            }
          }}
          onClick={handleSubmit}
          maxLength={120}
        />
      </div>
      {search.length !== 0 && (
        <div className="FriendsPanel--searchFilter">
          <p>
            Searching: {search}
            <span role="button" onClick={() => setSearch("")}>
              Clear
            </span>
          </p>
        </div>
      )}
      <div className="FriendsPanel--createRoom">
        <button type="button" className="button pill xl" onClick={handleCreate}>
          <p>Your private room</p>
          <i className="fas fa-plus-square fa-2x" />
        </button>
      </div>

      <div className="FriendsPanel--rooms">
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
            <div className="FriendsPanel--room" key={room.id}>
              <div className="FriendsPanel--room--nameAndMessage">
                <p>{roomName}</p>
                <p>{roomMessage}</p>
              </div>
              <div className="FriendsPanel--room--icon">
                <RoomIcon
                  images={images}
                  online={online}
                  watching={room.watching}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
