import React, { useState } from "react";
import InviteFriends from "../InviteFriends";
import "./InvitePanel.css";

export default function InvitePanel({ modal }) {
  const [url, setUrl] = useState("https://google.com");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {}
  };
  return (
    <div
      className={`InvitePanel--container${modal ? " InvitePanel--modal" : ""}`}
    >
      <h3>Invite friends to watch with you!</h3>
      {modal ? (
        <>
          <div className="InvitePanel--inviteLink">
            <div className="InvitePanel--icon">
              <i className="fas fa-user-plus fa-4x" />
            </div>
            <div>
              <p className="InvitePanel--share">Copy and share this link:</p>
              <div className="InvitePanel--link">
                <div>
                  <p>{url}</p>
                </div>
                <button
                  type="button"
                  className="button pill sm"
                  onClick={copied ? undefined : handleCopy}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
          <InviteFriends />
        </>
      ) : (
        <div className="InvitePanel--inviteLink">
          <div>
            <div className="InvitePanel--icon">
              <i className="fas fa-user-plus fa-sm" />
            </div>
            <p className="InvitePanel--share">Copy and share this link:</p>
          </div>
          <div className="InvitePanel--link">
            <div>
              <p>{url}</p>
            </div>
            <button
              type="button"
              className="button pill sm"
              onClick={copied ? undefined : handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
