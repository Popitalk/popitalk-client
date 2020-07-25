import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Button from "./Controls/Button";

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
      <div>
        <p className="pt-6 pb-2 px-4 text-lg font-bold text-primaryText select-none">
          Up Next
        </p>
        <div className="cursor-pointer w-full flex-shrink-0 max-w-2xs mx-4 mb-4 mt-2 rounded-md shadow-xs hover:shadow-md transition-all ease-in-out duration-100 bg-disabledBackground">
          <div className="relative pb-16/9 w-full">
            <div className="absolute flex items-center justify-center w-full h-full">
              <Button size="sm" icon="search" />
              <p className="mx-2 text-secondaryText text-sm hover:filter-brightness-9">
                Search for a video
              </p>
            </div>
          </div>
        </div>
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
