import React, { useState } from "react";
import ManageUsersList from "./InfoCardLists/ManageUsersList";
import StretchList from "./InfoCardLists/StretchList";
import Input from "./Controls/Input";

export default function ManageUsers({
  ownerId,
  category,
  users,
  options,
  handleProfile,
  admins
}) {
  const [input, setInput] = useState("");
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      <h3 className="font-bold text-xl mb-4 text-copy-primary">
        {category} · {filteredUsers.length}
      </h3>
      <Input
        variant="filter"
        size="sm"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
      />
      {filteredUsers.length !== 0 ? (
        <div className="flex flex-col items-stretch w-full h-full overflow-auto">
          <StretchList
            ownerId={ownerId}
            list={ManageUsersList}
            users={filteredUsers}
            options={options}
            handleProfile={handleProfile}
            admins={admins}
          />
        </div>
      ) : (
        <h2 className="text-copy-secondary text-sm flex-grow flex justify-center items-center py-32">
          No Users Found
        </h2>
      )}
    </div>
  );
}
