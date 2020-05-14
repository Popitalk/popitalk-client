import React from "react";
import classnames from "classnames";
import Text from "./Text";

export default function MenuButton({ selected, danger, text, onClick }) {
  const buttonClasses = classnames(
    "flex justify-center hover:bg-highlightBackground rounded-lg px-4 py-2",
    {
      "bg-highlightBackground": selected
    }
  );

  return (
    <div role="button" onClick={onClick} className={buttonClasses}>
      <Text variant="text2" className={danger ? "text-errorText" : ""}>
        {text}
      </Text>
    </div>
  );
}
