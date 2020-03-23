import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import _ from "lodash";
import Seperator from "../Seperator";
import ChannelList from "../ChannelList";
import ChannelCard2 from "../ChannelCard2";
import AvatarDeck from "../AvatarDeck";
import RoomIcon2 from "../RoomIcon2";
import "./ChannelsPanel2.css";

export default function ChannelsPanel2() {
  const { defaultIcon } = useSelector(state => state.general);
  const channels = useSelector(state => state.channels);
  const { id: ownId, channelIds } = useSelector(state => state.self);
  const location = useLocation();

  let yourChannels = [];
  let followingChannels = [];

  channelIds
    .map(channelId => ({ id: channelId, ...channels[channelId] }))
    .forEach(channel => {
      if (channel.ownerId === ownId) {
        yourChannels.push(channel);
      } else {
        followingChannels.push(channel);
      }
    });

  const activeChannel = location.pathname.split("/")[2];

  return (
    <div className="ChannelsPanel2--container">
      <div className="ChannelsPanel2--main">
        <div className="ChannelsPanel2--header">
          {/* <i className="fas fa-globe-americas fa-2x" /> */}
          <h3>Channels</h3>
        </div>
        {yourChannels.length !== 0 && (
          <div className="ChannelsPanel2--channels">
            {/* <h3>Your Channels</h3> */}
            <div className="ChannelList--container">
              {yourChannels.map(channel => (
                <div
                  key={channel.id}
                  className={`${
                    channel.id === activeChannel
                      ? " ChannelList--active"
                      : " ChannelList--inActive"
                  }`}
                >
                  <div className="ChannelList--slab" />
                  <Link
                    to={`/channels/${channel.id}/video`}
                    className="ChannelList--channel"
                    role="button"
                  >
                    <RoomIcon2
                      images={[channel.icon || defaultIcon]}
                      watching={channel.watching}
                      type={
                        channel.watching ? "ChannelsPanel2w" : "ChannelsPanel2"
                      }
                    />
                    <div className="ChannelList--channel--name">
                      <p>{channel.name}</p>
                      {channel.watching && (
                        <AvatarDeck avatars={channel.avatars} size="small" />
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="ChannelsPanel2--button">
          <Link to="/channels/create">
            <i className="fas fa-plus" />
            <p>Create Channel</p>
          </Link>
        </div>

        {followingChannels.length !== 0 && (
          <div className="ChannelsPanel2--channels">
            <h3>Following Channels</h3>
            <div className="ChannelList--container">
              {followingChannels.map(channel => (
                <div
                  key={channel.id}
                  className={`${
                    channel.id === activeChannel
                      ? " ChannelList--active"
                      : " ChannelList--inActive"
                  }`}
                >
                  <div className="ChannelList--slab" />
                  <Link
                    to={`/channels/${channel.id}/video`}
                    className="ChannelList--channel"
                    role="button"
                  >
                    <RoomIcon2
                      images={[channel.icon || defaultIcon]}
                      watching={channel.watching}
                      type={
                        channel.watching ? "ChannelsPanel2w" : "ChannelsPanel2"
                      }
                    />
                    <div className="ChannelList--channel--name">
                      <p>{channel.name}</p>
                      {channel.watching && (
                        <AvatarDeck avatars={channel.avatars} size="small" />
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="ChannelsPanel2--seperator">
          <Seperator text="DISCOVER" />
        </div>
        <div className="ChannelsPanel2--discover">
          <ChannelCard2 />
          <ChannelCard2 />
          <ChannelCard2 />
        </div>
      </div>
    </div>
  );
}
