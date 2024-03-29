import React from "react";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "../ContainerHeader";
import ButtonsList from "../Controls/ButtonsList";

export default function DropDownMenu({ title, handleBack, buttons, src }) {
  return (
    <DropDownContainer>
      <ContainerHeader title={title} handleBack={handleBack} icon={src} />
      <div className="p-3 text-sm">
        <ButtonsList buttons={buttons} />
      </div>
    </DropDownContainer>
  );
}
