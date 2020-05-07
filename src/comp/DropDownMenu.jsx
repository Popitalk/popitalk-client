import React from "react";
import Text from "./Text";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "./ContainerHeader";

export default function DropDownMenu({ title, handleBack, buttons }) {
  return (
    <DropDownContainer>
      <ContainerHeader title={title} handleBack={handleBack} />
      <div className="p-2">
        {buttons.map((b, i) => {
          return (
            <div
              role="button"
              onClick={b.onClick}
              key={i}
              className="flex justify-center bg-primaryBackground hover:bg-highlightBackground rounded-lg px-4 py-2"
            >
              <Text
                variant="text2"
                className={b.danger ? "text-errorText" : ""}
              >
                {b.text}
              </Text>
            </div>
          );
        })}
      </div>
    </DropDownContainer>
  );
}
