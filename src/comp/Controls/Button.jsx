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
  selectedColor,
  hoverable,
  tooltip,
  ...props
}) {
  if (selectedColor) background = selectedColor;
  const backgrounds = {
    primary: "bg-gradient-br-button",
    secondary: "bg-gradient-br-search",
    cancel: "bg-gradient-br-cancel",
    bgColor: "bg-gradient-br-bgColor"
  };

  const shapes = {
    regular: "rounded-lg",
    pill: "rounded-pill",
    circle: "rounded-circle",
    none: "rounded-sm"
  };

  const buttonClasses = classnames({
    btn: true,
    [`btn-${size}`]: true,
    [backgrounds[background]]: true,
    [shapes[shape]]: true,
    "transition transform ease-in-out hover:scale-105 duration-100": true,
    "text-secondaryText": background === "bgColor",
    "btn-icon": icon && !shape,
    "btn-text": variant === "text",
    [className]: className
  });

  return (
    <button
      className={buttonClasses}
      data-tip={tooltip}
      disabled={disabled}
      {...props}
    >
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
