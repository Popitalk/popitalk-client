import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import VideoPanelCard from "./VideoPanelCard";

// Handler Change Params ({oldIndex, newIndex)}
export default function SortableList({
  items,
  itemRenderer,
  children,
  handlerChange,
  axis = "y",
  height = "100%"
}) {
  if (!items || items.length === 0) {
    return (
      <div className="h-32 w-full flex items-center justify-center">
        <p className="text-sm">Nothing to show</p>
      </div>
    );
  }

  const ULStyle = {
    height,
    spacing: 4
    // width: "100%"
  };

  const SortableItem = SortableElement(({ value }) => itemRenderer(value));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div
        className={
          (axis === "y" ? "flex-col" : "flex-row") +
          " flex flex-grow overflow-auto py-4 items-start"
        }
      >
        {items.map((value, index) => (
          <SortableItem key={`item-${value.id}`} index={index} value={value} />
        ))}
        {children}
      </div>
    );
  });

  return (
    <SortableList
      items={items}
      onSortEnd={handlerChange}
      axis={axis}
    ></SortableList>
  );
}
