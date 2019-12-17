import React from "react";
import "./TestPage.css";
import ChannelsPanel1 from "../../components/ChannelsPanel1";
import FriendsPanel1 from "../../components/FriendsPanel1";
import RoomIcon2 from "../../components/RoomIcon2";

export default function TestPage() {
  return (
    <div className="TestPage--container">
      <div className="xyz">
        {/* <img src="https://i.imgur.com/aqjzchq.jpg" alt="abc" className="pic1" /> */}
        {/* <img src="https://i.imgur.com/aqjzchq.jpg" alt="abc" className="pic1" /> */}
        {/* <div className="picx">
          <img
            src="https://i.imgur.com/aqjzchq.jpg"
            alt="abc"
            className="pic2"
          />
        </div>
        <div className="picx picx--watching">
          <img
            src="https://i.imgur.com/aqjzchq.jpg"
            alt="abc"
            className="pic2"
          />
        </div> */}
        <RoomIcon2 images={["https://i.imgur.com/aqjzchq.jpg"]} />
        <RoomIcon2
          images={["https://i.imgur.com/aqjzchq.jpg"]}
          watching={true}
        />
        <RoomIcon2 images={["https://i.imgur.com/aqjzchq.jpg"]} online={true} />
        <RoomIcon2
          images={["https://i.imgur.com/aqjzchq.jpg"]}
          watching={true}
          online={true}
        />
        <RoomIcon2
          images={[
            "https://i.imgur.com/aqjzchq.jpg",
            "https://i.imgur.com/tLljw1z.jpg"
          ]}
          watching={true}
        />
        <RoomIcon2
          images={[
            "https://i.imgur.com/aqjzchq.jpg",
            "https://i.imgur.com/tLljw1z.jpg"
          ]}
        />
        <RoomIcon2
          images={[
            "https://i.imgur.com/aqjzchq.jpg",
            "https://i.imgur.com/tLljw1z.jpg",
            "https://i.imgur.com/aqjzchq.jpg"
          ]}
          watching={true}
        />
      </div>
    </div>
  );
}
