import React, { useCallback } from "react";
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
