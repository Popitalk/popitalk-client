import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
// import { Redirect } from "react-router-dom";
import LandingPage from "../routes/LandingPage";
import Header from "../components/Header";
import ModalManager from "../components/ModalManager";
// import { validateSession } from "../redux/actions";
import "@fortawesome/fontawesome-free/css/all.css";
import "./fw.css";
import "./App.css";

const Page = () => <div />;

export default function App() {
  // const loggedIn = useSelector(({ userState }) => userState.id);
  // const dispatch = useDispatch();
  // const dispatchValidateSession = useCallback(
  //   () => dispatch(validateSession()),
  //   [dispatch]
  // );

  // useEffect(() => {
  //   dispatch(validateSession());
  // }, [dispatch]);

  return (
    <section className="App--container">
      <ModalManager />
      <Header />
      <Switch>
        {<Route path="/a" component={LandingPage} />}
        {<Route path="/" component={Page} />}
        {/* <Route
          path="/"
          render={() =>
            loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />
          }
        /> */}
      </Switch>
    </section>
  );
}
