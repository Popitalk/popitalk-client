import React, { useState } from "react";
import ManageUsersList from "./InfoCardLists/ManageUsersList";
import Input from "./Input";

export default function ManageUsers({
  category,
  users,
  options,
  handleProfile
}) {
  const [input, setInput] = useState("");
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <h3 className="font-bold mb-3">
        {category} - {filteredUsers.length} users
      </h3>
      <Input
        variant="filter"
        size="lg"
        shape="pill"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        className="mb-8"
      />
      {filteredUsers.length !== 0 ? (
        <div className="flex-grow">
          <ManageUsersList
            users={filteredUsers}
            options={options}
            handleProfile={handleProfile}
          />
        </div>
      ) : (
        <h2 className="text-secondaryText font-semibold text-2xl flex-grow flex justify-center items-center">
          No Users Found
        </h2>
      )}
    </div>
  );
}
