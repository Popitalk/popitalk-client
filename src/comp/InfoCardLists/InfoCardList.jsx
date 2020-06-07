import React from "react";
import { FixedSizeList } from "react-window";

export default function InfoCardList({
  items,
  itemRenderer,
  height = 300,
  itemSize = 64
}) {
  if (!items || items.length === 0) {
    return (
      <div className="h-32 w-full flex items-center justify-center">
        <p className="text-sm text-secondaryText font-medium">
          Nothing to show
        </p>
      </div>
    );
  }

  const ItemRenderer = ({ index, style }) => {
    const i = items[index];

    return (
      <div className="px-1" style={style}>
        {itemRenderer(i)}
      </div>
    );
  };

  let finalHeight = height;
  const spacing = 4;
  const finalSize = itemSize + spacing;

  if (items.length * finalSize < height) {
    finalHeight = items.length * finalSize;
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
