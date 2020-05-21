import React from "react";
import DropDownContainer from "./DropDownContainer";
import ContainerHeader from "../ContainerHeader";
import Text from "../Text";
import Button from "../Button";

export default function DeleteAccountDropDown({ handleBack, handleDelete }) {
  return (
    <DropDownContainer>
      <ContainerHeader title="Delete Account" handleBack={handleBack} />
      <div className="p-8 flex flex-col items-center">
        <Text variant="subtitle2">Are you sure?</Text>
        <Text variant="text2" className="pt-2 pb-8">
          You cannot undo this action.
        </Text>
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
