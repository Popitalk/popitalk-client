import React from "react";
import MenuButton from "./MenuButton";

export default function ButtonsList({ buttons, row, freeform }) {
  return (
    <div className={`children:not-first ${row && "flex"}`}>
      {buttons.map((b, i) => (
        <MenuButton {...b} key={i} freeform={freeform} />
      ))}
    </div>
  );
}
