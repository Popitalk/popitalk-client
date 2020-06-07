import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions";

export default function CreateNewAccountContainer({ component: Component }) {
  const dispatch = useDispatch();
  const apiLoading = useSelector(state => state.api.registerApi.loading);

  return (
    <Component
      handleSubmit={values => dispatch(register(values))}
      loading={apiLoading}
    />
  );
}
