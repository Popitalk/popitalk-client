import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../redux/actions";

const Alert = ({ color, textColor, duration, children }) => {
  color = color || "red";
  textColor = textColor || "white";
  duration = duration || 3000;

  const dispatch = useDispatch();

  useEffect(() => {
    const close = () => {
      dispatch(setAlert(""));
    };

    setTimeout(close, duration);
  }, [dispatch, duration]);

  return (
    <div
      className={`bg-${color} text-${textColor} flex items-center
        justify-center h-10 w-full z-50 absolute rounded-full`}
    >
      {children}
    </div>
  );
};

export default Alert;
