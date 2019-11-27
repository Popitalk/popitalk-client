import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LandingPage.css";
import { openCreateNewAccountModal } from "../../redux/actions";
import Input1 from "../../components/Input1";
import Input2 from "../../components/Input2";
import Input3 from "../../components/Input3";
import Input4 from "../../components/Input4";
import Input6 from "../../components/Input6";
import Textarea1 from "../../components/Textarea1";
import Textarea2 from "../../components/Textarea2";
import Footer from "../../components/Footer";
// import Landi from "../../assets/landing_page.png";

export default function LandingPage() {
  const dispatch = useDispatch();
  const openCreateNewAccountModalDispatcher = useCallback(
    () => dispatch(openCreateNewAccountModal()),
    [dispatch]
  );
  return (
    <div className="LandingPage--container">
      <div>
        <div>
          <h2>Watch anything together!</h2>
          <h4>Create a room or sign up to text and watch together</h4>
          <div className="LandingPage--buttons">
            <button type="button" className="button pill lg">
              CREATE ROOM
            </button>
            <button
              type="button"
              className="button pill lg bgc-tertiary"
              onClick={openCreateNewAccountModalDispatcher}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
