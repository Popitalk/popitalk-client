import React from "react";
import DropDownContainer from "./DropDownContainer";
import ModalHeader from "./ModalHeader";
import Text from "./Text";

export default function Updates({
  title,
  updates,
  itemRenderer,
  startComponent
}) {
  let modalContent = <></>;
  if (!updates || updates.length === 0) {
    modalContent = (
      <div className="h-32 w-full flex items-center justify-center">
        <Text variant="small2">Nothing to show</Text>
      </div>
    );
  } else {
    modalContent = (
      <div className="pb-2 pr-2 pl-2">
        {startComponent ? startComponent : <></>}
        <div className="children:not-first:mt-1 mt-3 mb-3 h-64 overflow-auto">
          {updates.map(u => {
            return (
              <div className="mx-1" key={u.id}>
                {itemRenderer(u)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <DropDownContainer>
      <ModalHeader title={title} />
      {modalContent}
    </DropDownContainer>
  );
}
