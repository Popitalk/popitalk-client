import React from "react";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "../ContainerHeader";
import Button from "../Button";

export default function DeleteAccountDropDown({ handleBack, handleDelete }) {
  return (
    <DropDownContainer>
      <ContainerHeader title="Delete Account" handleBack={handleBack} />
      <div className="p-8 flex flex-col items-center">
        <h4 className="text-lg">Are you sure?</h4>
        <p className="text-base pt-2 pb-8">You cannot undo this action.</p>
        <Button
          background="cancel"
          shape="pill"
          size="md"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </DropDownContainer>
  );
}
