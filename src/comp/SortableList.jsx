import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Text from "./Text";

// Handler Change Params ({oldIndex, newIndex)}
export default function SortableList({ items, itemRenderer, handlerChange, axis = "y", height = '100%' }) {

  if (!items || items.length === 0) {
    return (
      <div className="h-32 w-full flex items-center justify-center">
        <Text variant="small2">Nothing to show</Text>
      </div>
    );
  }

  const ULStyle = {
    height,
    spacing: 4,
    width: "100%"
  };

  const SortableItem = SortableElement(({ value }) => itemRenderer(value));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div
        className={(axis === "y" ? "flex-col" : "flex-row") + " flex relative overflow-auto p-2 bg-secondaryBackground"}
        style={ULStyle}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value}/>
        ))}
      </div>
    );
  });

  return (
    <SortableList items={items} onSortEnd={handlerChange} axis={axis}>
    </SortableList>
  );
};
