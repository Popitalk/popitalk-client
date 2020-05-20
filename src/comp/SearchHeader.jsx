import React from "react";

export default function SearchHeader({ title, children }) {
  return (
    <div className="inset-x-0 top-0 bg-secondaryBackground rounded-t-xl flex flex-col items-center shadow-search py-2 px-4">
      <h4 className="text-base font-bold pb-2">{title}</h4>
      {children}
    </div>
  );
}
