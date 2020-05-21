import React from "react";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "../ContainerHeader";
import ButtonsList from "../ButtonsList";

export default function DropDownMenu({ title, handleBack, buttons }) {
  return (
    <DropDownContainer>
      <ContainerHeader title={title} handleBack={handleBack} />
      <div className="p-2">
        <ButtonsList buttons={buttons} />
      </div>
    </DropDownContainer>
  );
}
