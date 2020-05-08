import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

export default function Button({
  variant,
  background,
  color,
  shape,
  leftIcon,
  rightIcon,
  icon,
  size,
  disabled,
  children,
  className,
  ...props
}) {
  const backgrounds = {
    primary: "bg-gradient-br-button",
    secondary: "bg-gradient-br-search",
    cancel: "bg-gradient-br-cancel"
  };

  // console.log("before shape", shape);
  //shape = !shape && icon ? "circle" : shape;
  // console.log("after shape", shape);

  const shapes = {
    regular: "rounded-lg",
    pill: "rounded-pill",
    circle: "rounded-circle"
  };

  const buttonClasses = classnames({
    btn: true,
    [`btn-${size}`]: true,
    [backgrounds[background]]: true,
    [shapes[shape]]: true,
    "btn-icon": icon && !shape,
    "btn-text": variant === "text",
    [className]: className
  });
  console.log("button Classes", buttonClasses);

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {icon ? <FontAwesomeIcon icon={icon} /> : <span>{children}</span>}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  background: "button",
  shapes: "regular",
  color: "primaryButtonText",
  size: "md"
};
