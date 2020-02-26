import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import _ from "lodash";
import { getChannel } from "../../redux/actions";
import VideoPanel from "../VideoPanel";
import Forum from "../Forum";
import UpdateQueue from "../UpdateQueue";
import ChannelSettings from "../ChannelSettings";
import "./ChannelMain.css";

export default function ChannelMain({
  channelId,
  channel,
  privateAndNotMember
}) {
  // const { channelId } = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const channelRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);
  const { defaultIcon, defaultAvatar } = useSelector(state => state.general);
  const { id: ownId } = useSelector(state => state.self);
  // const channel = useSelector(state => state.channels[channelId]);
  // const users = useSelector(state => state.users);
  // const { id: ownId, username: ownUsername, avatar: ownAvatar } = useSelector(
  //   state => state.self
  // );
  const loading = useSelector(state => !state.channels[channelId]?.loaded);

  // const loading = !channels[channelId]?.loaded;

  // useEffect(() => {
  //   if (channel && !channel?.loaded) {
  //     dispatch(getChannel(channelId));
  //   } else if (!channel) {
  //     dispatch(getChannel(channelId));
  //     console.log("NO ROOM");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [channelId]);

  // useEffect(() => {
  //   if (!mounted) {
  //     setMounted(true);
  //   }
  // }, [mounted]);

  // useEffect(() => {
  //   // if (!mounted) return;

  //   // const tab = location.pathname.replace(match.url, "").slice(1);

  //   // if (tab === "video") {
  //   //   if (y >= channelRef.current.offsetTop) {
  //   //     history.push(`${match.url}/channel`, { noScroll: true });
  //   //   }
  //   // } else if (tab === "channel") {
  //   //   if (y < channelRef.current.offsetTop) {
  //   //     history.push(`${match.url}/video`, { noScroll: true });
  //   //   }
  //   // }
  // }, [y]);

  useLayoutEffect(() => {
    if (loading) return;
    if (privateAndNotMember) return;
    const tab = location.pathname.replace(match.url, "").slice(1);
    // const noScroll = location.state && location.state.noScroll;

    // if (noScroll) return;

    if (tab === "video") {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (tab === "channel") {
      scrollRef.current.scrollTo({
        top: channelRef.current.offsetTop + 6,
        behavior: "smooth"
      });
      // setMounted(true);
    } else if (tab === "settings" || tab === "queue") {
      scrollRef.current.scrollTo({ top: 0 });
    }
  }, [loading, location, match.url, privateAndNotMember]);

  const isAdmin = channel?.admins?.includes(ownId);
  // const loading = !channels[channelId]?.loaded;

  return (
    <div className="ChannelMain--container">
      <div className="ChannelMain--header">
        {loading ? (
          <Skeleton height={20} width={250} />
        ) : (
          <div>
            <img src={channel.icon || defaultIcon} alt="channel icon" />
            <h2>{channel.name}</h2>
          </div>
        )}

        <div className="ChannelMain--nav">
          <Link
            to={`${match.url}/video`}
            className={`${
              location.pathname === `${match.url}/video`
                ? "ChannelMain--active"
                : "ChannelMain--inActive"
            }${loading ? " disabled-link" : ""}`}
          >
            <h4>Video</h4>
            <div className="ChannelMain--nav--slab" />
          </Link>
          <Link
            to={`${match.url}/channel`}
            className={`${
              location.pathname === `${match.url}/channel`
                ? "ChannelMain--active"
                : "ChannelMain--inActive"
            }${loading ? " disabled-link" : ""}`}
          >
            <h4>Channel</h4>
            <div className="ChannelMain--nav--slab" />
          </Link>
          {isAdmin && (
            <Link
              to={`${match.url}/queue`}
              className={`${
                location.pathname === `${match.url}/queue`
                  ? "ChannelMain--active"
                  : "ChannelMain--inActive"
              }${loading ? " disabled-link" : ""}`}
            >
              <h4>Queue</h4>
              <div className="ChannelMain--nav--slab" />
            </Link>
          )}
          {isAdmin && (
            <Link
              to={`${match.url}/settings`}
              className={`${
                location.pathname.startsWith(`${match.url}/settings`)
                  ? "ChannelMain--active"
                  : "ChannelMain--inActive"
              }${loading ? " disabled-link" : ""}`}
            >
              <h4>Settings</h4>
              <div className="ChannelMain--nav--slab" />
            </Link>
          )}
        </div>
      </div>
      <section ref={scrollRef}>
        {loading ? (
          <Skeleton height={10000} />
        ) : (
          <Switch>
            <Route
              exact
              path={[`${match.path}/video`, `${match.path}/channel`]}
            >
              {!privateAndNotMember && (
                <>
                  <VideoPanel />
                  <div ref={channelRef} />
                </>
              )}

              <Forum privateAndNotMember={privateAndNotMember} />
            </Route>

            {!privateAndNotMember && (
              <>
                <Route path={`${match.path}/queue`}>
                  <UpdateQueue />
                </Route>
                <Route path={`${match.path}/settings`}>
                  <ChannelSettings />
                </Route>
              </>
            )}
          </Switch>
        )}
      </section>
    </div>
  );
}
