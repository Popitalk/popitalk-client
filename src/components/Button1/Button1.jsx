import React from "react";
import classNames from "classnames";
import "./Button1.css";

export default function Button1({
  type = "button",
  name,
  onClick,
  disabled,
  pill,
  children,
  className,
  size = "md",
  color = "blue"
}) {
  let style = [];

  if (Array.isArray(children)) {
    style.push(...children.map(c => c.type));
  } else if (typeof children === "object") {
    style.push(children.type);
  }

  const classes = classNames({
    "Button1--container": true,
    "Button1--normal":
      style.length === 0 || (style.length === 1 && style.includes("p")),
    "Button1--icon": style.length === 1 && style.includes("i"),
    "Button1--iconText":
      style.length === 2 && style.includes("p") && style.includes("i"),
    "Button1--pill": pill,
    "Button1--lg": size === "lg",
    "Button1--pink": color === "pink",
    [className]: className
  });

  return (
    <button
      className={classes}
      type={type}
      name={name}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
