import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateNewAccountForm from "../../components/Forms/CreateNewAccountForm";
import ModalContainer from "../../components/Modals/ModalContainer";
import { register } from "../../redux/actions";

export default function CreateNewAccountContainer({ handleModalClose }) {
  const dispatch = useDispatch();
  const registerApi = useSelector(state => state.api.registerApi);

  const handleSignUp = e => {
    dispatch(register(e));
    handleModalClose();
  };

  return (
    <ModalContainer
      isOpen={true}
      width="sm"
      handleModalClose={handleModalClose}
    >
      <div className="px-4 py-8">
        <CreateNewAccountForm
          handleSubmit={values => handleSignUp(values)}
          loading={registerApi.loading}
          error={registerApi.status === "error" ? registerApi.error : false}
        />
      </div>
    </ModalContainer>
  );
}
