import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import ReactGA from "react-ga";

export default function Button({
  // For normal buttons with a gradient background.
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
  tooltip,
  tooltipPlace = "bottom",
  analyticsString,
  onClick,
  // For buttons containing an image.
  imageButton,
  imageButtonSrc,
  imageButtonSpan,
  imageButtonClassName,
  imageButtonSpanClassName = "text-primaryText font-bold",
  // For non-explicit buttons such as SiteHeaderButtons or images that act as buttons.
  styleNone,
  styleNoneContent,
  styleNoneContentClassName,
  styleNoneImage,
  styleNoneIconClassName,
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
    "transition transform ease-in-out hover:scale-110 duration-100": hoverable,
    "focus:outline-none": true,
    [className]: className
  });

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

  const analyticsHandler = e => {
    ReactGA.event({
      category: "Button",
      action: analyticsString
    });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      {/* For buttons containing an image */}
      {imageButton && (
        <button onClick={analyticsHandler} className={styleNoneClasses}>
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

      {/* For non-explicit buttons such as SiteHeaderButtons or images that act as buttons. */}
      {styleNone && (
        <button
          className={styleNoneClasses}
          data-tip={tooltip}
          data-place={tooltipPlace}
          onClick={analyticsHandler}
          {...props}
        >
          <span className={styleNoneContentClassName}>{styleNoneContent}</span>
          {icon && (
            <FontAwesomeIcon className={styleNoneIconClassName} icon={icon} />
          )}
        </button>
      )}

      {/* For normal buttons with a gradient background. */}
      {actionButton && (
        <button
          className={buttonClasses}
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
