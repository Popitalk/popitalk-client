import React from "react";
import { FixedSizeList } from "react-window";

export default function InfoCardList({
  items,
  itemRenderer,
  height = 1000,
  itemSize = 64,
  fullHeight
}) {
  if (!items || items.length === 0) {
    return (
      <div className="h-32 w-full flex items-center justify-center">
        <p className="text-xs text-secondaryText font-medium">
          Nothing to show
        </p>
      </div>
    );
  }

  const ItemRenderer = ({ index, style }) => {
    const i = items[index];

    return (
      <div className="px-0" style={style}>
        {itemRenderer(i)}
      </div>
    );
  };

  let finalHeight = height;
  const spacing = 4;
  const finalSize = itemSize + spacing;

  if (items.length * finalSize < height || fullHeight) {
    finalHeight = items.length * finalSize + spacing * 2;
  }

  return (
    <div className="w-full">
      <FixedSizeList
        height={finalHeight}
        width="100%"
        itemCount={items.length}
        itemSize={finalSize}
      >
        {ItemRenderer}
      </FixedSizeList>
    </div>
  );
}
