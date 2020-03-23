import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import "./LandingPage.css";
import { openCreateNewAccountModal } from "../../redux/actions";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const dispatch = useDispatch();
  const openCreateNewAccountModalDispatcher = useCallback(
    () => dispatch(openCreateNewAccountModal()),
    [dispatch]
  );

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(90deg, #76fcff 0%, #f966f8 50%, #e8bba2 100%)";
    // document.body.style.backgroundSize = "400% 400%";
    // document.body.style.animation = "gradientBG 15s ease infinite";
    // document.body.style.background =
    //   "linear-gradient(123deg, #76fcff 0%, #f966f8 50%, #e8bba2 100%)";
    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
    <div className="LandingPage--container">
      <div>
        <div className="LandingPage--main">
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
          <div className="LandingPage--shade" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
