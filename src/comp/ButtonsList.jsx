import React from "react";
import classnames from "classnames";
import Text from "./Text";

export default function ButtonsList({ buttons }) {
  return (
    <>
      {buttons.map((b, i) => {
        const buttonClasses = classnames(
          "flex justify-center hover:bg-highlightBackground rounded-lg px-4 py-2",
          {
            "bg-primaryBackground": !b.selected,
            "bg-highlightBackground": b.selected
          }
        );

        return (
          <div
            role="button"
            onClick={b.onClick}
            key={i}
            className={buttonClasses}
          >
            <Text variant="text2" className={b.danger ? "text-errorText" : ""}>
              {b.text}
            </Text>
          </div>
        );
      })}
    </>
  );
}
