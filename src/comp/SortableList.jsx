import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Button from "./Controls/Button";
import strings from "../helpers/localization";
import ScrollableCardList from "./ScrollableCardList";

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
        <p className="py-2 px-4 text-lg text-primaryText select-none">
          {strings.upNext}
        </p>
        <div className="cursor-pointer w-full flex-shrink-0 max-w-2xs mx-4 mb-4 mt-2 rounded-md shadow-xs hover:shadow-md transition-all ease-in-out duration-100 bg-disabledBackground hover:bg-highlightBackground">
          <div className="relative pb-16/9 w-full">
            <div className="absolute flex items-center justify-center w-full h-full">
              <Button
                styleNone
                styleNoneContent={strings.findMoreVideos}
                icon="search"
                styleNoneContentClassName="mx-2 text-secondaryText text-sm"
                styleNoneIconClassName="text-secondaryText"
                className="hover:filter-brightness-9"
                analyticsString="Search Video Button: SortableList"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const SortableItem = SortableElement(({ value }) => itemRenderer(value));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ScrollableCardList axis={axis}>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${value.id}`}
            index={index}
            value={value}
            distance={1}
          />
        ))}
        {children}
      </ScrollableCardList>
    );
  });

  return (
    <SortableList
      items={items}
      onSortEnd={handlerChange}
      axis={axis}
      distance={1}
    />
  );
}
