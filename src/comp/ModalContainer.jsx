import React from "react";

export default function ModalContainer({ children }) {
  return (
    <div className="relative md:w-3/4 lg:w-1/2 object-center bg-primaryBackground pb-8 pr-8 pl-8 pt-12 rounded-xl shadow-xl">
      {children}
    </div>
  );
}
