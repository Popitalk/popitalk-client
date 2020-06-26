import React, { useState } from "react";
import ModalContainer from "../../comp/Modals/ModalContainer";
import SearchHeader, { buildSearchInput } from "../../comp/SearchHeader";
import StretchList from "../../comp/InfoCardLists/StretchList";
import FollowersList from "../../comp/InfoCardLists/FollowersList";
import { filterSearch } from "../../helpers/functions";
import { generateTestUsers } from "../../stories/seed-arrays";

const generatedUsers = generateTestUsers();

export default function ListUsersContainer({ handleModalClose }) {
  const [visible, setVisible] = useState(generatedUsers);
  const title = "DETERMINE TITLE HERE"; // Following, Watching Now, Admins, etc.

  return (
    <ModalContainer
      isOpen={true}
      small={true}
      fixedFullSize={true}
      handleModalClose={handleModalClose}
      header={
        <SearchHeader
          title={title}
          filterSearch={(searchTerm, items) =>
            filterSearch(items, "username", setVisible, searchTerm)
          }
          buildInput={buildSearchInput}
          items={generatedUsers}
        />
      }
    >
      <StretchList
        list={FollowersList}
        users={visible}
        handleProfile={() => console.log("open profile")}
      />
    </ModalContainer>
  );
}
