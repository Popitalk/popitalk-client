/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import "./Header.css";
import { login } from "../redux/actions";
import Header from "../comp/Header";
// import Input1 from "../Input1";
// import HeaderNotifications from "../HeaderNotifications";
// import HeaderFriends from "../HeaderFriends";
// import HeaderProfile from "../HeaderProfile";
// import HeaderSettings from "../HeaderSettings";
// import Logo from "../../assets/logo.png";
// import Button1 from "../Button1";

const Spinner = () => (
  <div className="Header--spinner">
    <div className="Header--spinner--circle">
      <div></div>
    </div>
  </div>
);

export default function HeaderContainer() {
  const { loggedIn } = useSelector(state => state.general);
  const apiLoading = useSelector(state => state.api.loginApi.loading);
  const apiError = useSelector(state => state.api.loginApi.error);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [headerLandingPage, setHeaderLandingPage] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname.startsWith("/welcome")) {
      setHeaderLandingPage(true);
    } else {
      setHeaderLandingPage(false);
    }
  }, [location]);

  const handleLogin = () => {
    dispatch(
      login({
        usernameOrEmail: username,
        password: password
      })
    );
    setUsername("");
    setPassword("");
  };

  return <Header />;
}
