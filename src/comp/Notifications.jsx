import React from "react";
import NotificationCard from "./NotificationCard";
import Updates from "./Updates";
import Button from "./Button";

export default function Notifications({ notifications, handleProfile }) {
  const itemRenderer = n => {
    return (
      <NotificationCard
        avatar={n.avatar}
        username={n.username}
        message={n.message}
        handleProfile={e => handleProfile(e, n.id)}
        onClick={e => handleProfile(e, n.id)}
      />
    );
  };

  const clearButton = (
    <div className="flex justify-end pt-2">
      <Button size="sm">Clear</Button>
    </div>
  );

  return (
    <Updates
      title="Notifications"
      updates={notifications}
      itemRenderer={itemRenderer}
      startComponent={clearButton}
    />
  );
}
