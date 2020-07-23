import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

// Handler Change Params ({oldIndex, newIndex)}
export default function SortableList({
  items,
  itemRenderer,
  children,
  handlerChange,
  axis,
  height = "100%"
}) {
  if (!items || items.length === 0) {
    return (
      <div className="h-32 w-full flex items-center justify-center">
        <p className="text-sm">Nothing to show</p>
      </div>
    );
  }

  const SortableItem = SortableElement(({ value }) => itemRenderer(value));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div>
        <p className="pt-6 pb-2 px-4 text-lg font-bold text-primaryText select-none">
          Up Next
        </p>
        <div
          className={`flex ${
            axis === "x" ? "flex-row" : "flex-col"
          } flex-grow overflow-auto px-4 pt-2 pb-8 items-start mozilla-thin-scrollbar`}
        >
          {items.map((value, index) => (
            <SortableItem
              key={`item-${value.id}`}
              index={index}
              value={value}
            />
          ))}
          {children}
        </div>
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
