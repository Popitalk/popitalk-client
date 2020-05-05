import React from "react";
import { FixedSizeList } from "react-window";
import Text from "./Text";

export default function InfoCardList({ items, itemRenderer }) {
  if (!items || items.length === 0) {
    return (
      <div className="h-32 w-full flex items-center justify-center">
        <Text variant="small2">Nothing to show</Text>
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

  let height = 300;
  const spacing = 4;
  const itemSize = 64 + spacing;

  if (items.length * itemSize < height) {
    height = items.length * itemSize;
  }

  return (
    <div className="p-2">
      <FixedSizeList
        height={height}
        width="100%"
        itemCount={items.length}
        itemSize={itemSize}
      >
        {ItemRenderer}
      </FixedSizeList>
    </div>
  );
}
