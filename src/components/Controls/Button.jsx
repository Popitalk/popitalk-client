import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import ReactGA from "react-ga";

export default function Button({
  // For buttons with a gradient background and most widely used.
  actionButton,
  variant,
  background,
  color,
  shape,
  leftIcon,
  rightIcon,
  icon,
  size,
  disabled,
  hoverable,
  children,
  className,
  selectedColor,
  // For buttons containing an image.
  imageButton,
  imageButtonSrc,
  imageButtonSpan,
  imageButtonClassName,
  imageButtonSpanClassName = "text-primaryText font-bold",
  // For buttons that only contains icons.
  styleNone,
  styleNoneContent,
  styleNoneContentClassName,
  styleNoneImage,
  styleNoneIconClassName,
  // Button Tooltip
  tooltip,
  tooltipPlace = "bottom",
  // Google Analytics
  analyticsString,
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

  const styleNoneClasses = classnames({
    "transition transform ease-in-out hover:scale-105 duration-100": hoverable,
    "focus:outline-none": true,
    [className]: className
  });

  const actionButtonClasses = classnames({
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

  //analyticsHander contains two functions: Google Analytics event function & button event funtion.
  const analyticsHandler = e => {
    //Google Analytics function
    if (process.env.NODE_ENV === "production") {
      ReactGA.event({
        category: "Button",
        action: analyticsString
      });
    }

    // Button function
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <>
      {/* For buttons containing an image */}
      {imageButton && (
        <button
          onClick={analyticsHandler}
          className={styleNoneClasses}
          disabled={disabled}
        >
          <div className="flex items-center justify-center">
            <img
              src={imageButtonSrc}
              alt="Somthing"
              className={imageButtonClassName}
            />
            {imageButtonSpan && (
              <span className={imageButtonSpanClassName}>
                {imageButtonSpan}
              </span>
            )}
          </div>
        </button>
      )}

      {/* For non-explicit buttons such as SiteHeaderButtons or icons that act as buttons. */}
      {styleNone && (
        <button
          className={styleNoneClasses}
          data-tip={tooltip}
          data-place={tooltipPlace}
          onClick={analyticsHandler}
          {...props}
        >
          {icon && (
            <FontAwesomeIcon className={styleNoneIconClassName} icon={icon} />
          )}
          <span className={styleNoneContentClassName}>{styleNoneContent}</span>
        </button>
      )}

      {/* For normal buttons with a gradient background. */}
      {actionButton && (
        <button
          className={actionButtonClasses}
          data-tip={tooltip}
          data-place={tooltipPlace}
          disabled={disabled}
          onClick={analyticsHandler}
          {...props}
        >
          {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
          {icon ? <FontAwesomeIcon icon={icon} /> : <span>{children}</span>}
          {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  variant: "primary",
  background: "button",
  shapes: "regular",
  color: "primaryButtonText",
  size: "md"
};
