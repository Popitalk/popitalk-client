import React from "react";

const Alert = ({ color, textColor, children }) => {
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
