import React from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch, useLocation, useParams } from "react-router-dom";
import "./ChannelSettingsSidebar.css";
import { openDeleteChannelModal } from "../../redux/actions";

export default function ChannelSettingsSidebar() {
  const { channelId } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = false;

  const handleChannelDelete = () => {
    dispatch(openDeleteChannelModal(channelId));
  };

  return (
    <div className="ChannelSettingsSidebar--container">
      <div className="ChannelSettingsSidebar--nav">
        <Link
          to={`${match.url}/general`}
          className={`${
            location.pathname === `${match.url}/general`
              ? "ChannelSettingsSidebar--active"
              : "ChannelSettingsSidebar--inActive"
          }${loading ? " disabled-link" : ""}`}
        >
          <h4>Channel Settings</h4>
        </Link>
        <Link
          to={`${match.url}/members`}
          className={`${
            location.pathname === `${match.url}/members`
              ? "ChannelSettingsSidebar--active"
              : "ChannelSettingsSidebar--inActive"
          }${loading ? " disabled-link" : ""}`}
        >
          <h4>Manage Members</h4>
        </Link>
        <Link
          to={`${match.url}/admins`}
          className={`${
            location.pathname === `${match.url}/admins`
              ? "ChannelSettingsSidebar--active"
              : "ChannelSettingsSidebar--inActive"
          }${loading ? " disabled-link" : ""}`}
        >
          <h4>Manage Admins</h4>
        </Link>
        <Link
          to={`${match.url}/banned`}
          className={`${
            location.pathname === `${match.url}/banned`
              ? "ChannelSettingsSidebar--active"
              : "ChannelSettingsSidebar--inActive"
          }${loading ? " disabled-link" : ""}`}
        >
          <h4>Manage Banned Users</h4>
        </Link>
      </div>
      <p
        className="ChannelSettingsSidebar--delete"
        onClick={handleChannelDelete}
      >
        Delete Channel
      </p>
    </div>
  );
}
