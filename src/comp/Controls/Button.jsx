import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import ReactGA from "react-ga";

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
  tooltipPlace = "bottom",
  analyticsString,
  onClickEvent,
  ...props
}) {
  if (selectedColor) background = selectedColor;
  const backgrounds = {
    primary: "bg-gradient-br-button",
    secondary: "bg-gradient-br-search",
    cancel: "bg-gradient-br-cancel",
    bgColor: "bg-gradient-br-bgColor",
    gradient: "bg-gradient-r-primary"
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

  const analyticsHandler = () => {
    ReactGA.event({
      category: "Button",
      action: analyticsString
    });
    if (onClickEvent) {
      onClickEvent();
    }
    alert(analyticsString);
  };

  return (
    <button
      className={buttonClasses}
      data-tip={tooltip}
      data-place={tooltipPlace}
      disabled={disabled}
      {...props}
      onClick={analyticsHandler}
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
