import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useParams,
  useHistory
} from "react-router-dom";
import _ from "lodash";
import Seperator from "../Seperator";
import ChannelList from "../ChannelList";
import ChannelCard2 from "../ChannelCard2";
import AvatarDeck from "../AvatarDeck";
import RoomIcon2 from "../RoomIcon2";
import "./ChannelsPanel2.css";

export default function ChannelsPanel2() {
  const { channels, defaultIcon } = useSelector(state => state.generalState);
  const { id: ownId } = useSelector(state => state.userState);
  const location = useLocation();

  let yourChannels = {};
  let followingChannels = {};

  Object.entries(channels).forEach(([channelId, channel]) => {
    if (channel.ownerId === ownId) {
      yourChannels = { ...yourChannels, [channelId]: channel };
    } else {
      followingChannels = { ...followingChannels, [channelId]: channel };
    }
  });

  const activeChannel = location.pathname.split("/")[2];

  return (
    <div className="ChannelsPanel2--container">
      <div className="ChannelsPanel2--header">
        <i className="fas fa-globe-americas fa-2x" />
        <h3>Channels</h3>
      </div>
      <div className="ChannelsPanel2--main">
        {!_.isEmpty(yourChannels) && (
          <div className="ChannelsPanel2--channels">
            <h3>Your Channels</h3>
            <div className="ChannelList--container">
              {Object.entries(yourChannels).map(([channelId, channel]) => (
                <div
                  key={channelId}
                  className={`${
                    channelId === activeChannel
                      ? " ChannelList--active"
                      : " ChannelList--inActive"
                  }`}
                >
                  <div className="ChannelList--slab" />
                  <Link
                    to={`/channels/${channelId}/video`}
                    className="ChannelList--channel"
                    role="button"
                    // onClick={() => setActiveChannel(channel.id)}
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

        {!_.isEmpty(followingChannels) && (
          <div className="ChannelsPanel2--channels">
            <h3>Following Channels</h3>
            <div className="ChannelList--container">
              {Object.entries(followingChannels).map(([channelId, channel]) => (
                <div
                  key={channelId}
                  className={`${
                    channelId === activeChannel
                      ? " ChannelList--active"
                      : " ChannelList--inActive"
                  }`}
                >
                  <div className="ChannelList--slab" />
                  <Link
                    to={`/channels/${channelId}/video`}
                    className="ChannelList--channel"
                    role="button"
                    // onClick={() => setActiveChannel(channel.id)}
                  >
                    <RoomIcon2
                      images={[channel.icon]}
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
