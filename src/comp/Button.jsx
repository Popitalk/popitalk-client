import React from "react";
import styled, { css, useTheme } from "styled-components";
import { color, space, variant } from "styled-system";
import cssTheme from "@styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const baseStyles = css`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 4px #00000047;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  user-select: none;
  border: 0;
  transition: filter 0.075s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
  &:disabled {
    background: none;
    cursor: not-allowed;
    & :hover {
      filter: none;
    }
  }
  ${cssTheme({
    "& > span": {
      fontFamily: "primary"
    },
    "&:disabled": {
      backgroundColor: "disabledBackground",
      color: "disabledText"
    }
  })}
`;

const colorsVariant = variant({
  prop: "color",
  variants: {
    primary: { color: "primaryButtonText" },
    secondary: { color: "secondaryButtonText" }
  }
});

const backgroundsVariant = variant({
  prop: "background",
  variants: {
    primary: {
      background:
        "transparent linear-gradient(180deg, #009DFF 0%, #5ABEFC 100%)"
    },
    secondary: {
      background:
        "transparent linear-gradient(180deg, #98E4FA 0%, #00C3FF 100%)"
    },
    cancel: {
      background:
        "transparent linear-gradient(180deg, #FA3535 0%, #FC5AA5 100%)"
    }
  }
});

const sizesVariant = props =>
  variant({
    prop: "size",
    variants: {
      xs: {
        paddingX: 1,
        paddingY: 1,
        padding: props.icon && 1,
        fontSize: 1,
        fontWeight: "bold",
        "& > *:first-child": {
          marginRight: 1
        },
        "& > *:last-child": {
          marginRight: 0
        },
        "& > i": {
          fontSize: 3
        }
      },
      sm: {
        paddingX: props.shape !== "pill" ? 2 : 3,
        paddingY: 1,
        padding: props.icon && 0,
        height: props.icon && 7,
        width: props.icon && 7,
        fontSize: !props.icon ? 3 : 2,
        fontWeight: "bold",
        "& > *:first-child": {
          marginRight: 2
        },
        "& > *:last-child": {
          marginRight: 0
        },
        "& > i": {
          fontSize: 3
        }
      },
      md: {
        paddingX: [3, 4],
        paddingY: [1, 2],
        padding: props.icon && [0, 0],
        height: props.icon && 8,
        width: props.icon && 8,
        fontSize: !props.icon ? 3 : 2,
        fontWeight: "bold",
        "& > *:first-child": {
          marginRight: [1, 2]
        },
        "& > *:last-child": {
          marginRight: 0
        },
        "& > i": {
          fontSize: 3
        }
      },
      lg: {
        paddingX: [6, 7],
        paddingY: [2, 3],
        padding: props.icon && [3, 4],
        fontSize: [2, 3],
        fontWeight: "bold",
        "& > *:first-child": {
          marginRight: [1, 2]
        },
        "& > *:last-child": {
          marginRight: 0
        },
        "& > i": {
          fontSize: 3
        }
      },
      xl: {
        paddingX: [7, 8],
        paddingY: [3, 4],
        padding: props.icon && [0, 0],
        height: props.icon && 10,
        width: props.icon && 10,
        fontSize: !props.icon ? [2, 3] : [3, 6],
        fontWeight: "bold",
        "& > *:first-child": {
          marginRight: [1, 2]
        },
        "& > *:last-child": {
          marginRight: 0
        },
        "& > i": {
          fontSize: 3
        }
      }
    }
  });

const shapesVariant = variant({
  prop: "shape",
  variants: {
    pill: {
      borderRadius: "25px"
    },
    rounded: {
      borderRadius: "15px"
    }
  }
});

const variantVariant = variant({
  prop: "variant",
  variants: {
    primary: {},
    flat: {
      background: "none",
      color: "primaryText",
      boxShadow: "none",
      "&>*:hover": {
        textDecoration: "underline"
      },
      "&>*:active": {
        transform: "translateY(1px)"
      }
    },
    icon: {
      borderRadius: "50%"
    },
    label: {
      background: "none",
      backgroundColor: "disabledBackground",
      color: "disabledText",
      pointerEvents: "none",
      "&:hover": {
        filter: "none"
      },
      "&:active": {
        filter: "none"
      }
    }
  }
});

const B = styled.button`
  ${baseStyles}
  ${shapesVariant}
  ${colorsVariant}
  ${backgroundsVariant}
  ${variantVariant}
  ${sizesVariant}
  ${color}
  ${space}
`;

export default function Button({
  children,
  leftIcon,
  rightIcon,
  icon,
  ...props
}) {
  return (
    <B {...props} icon={icon}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {icon ? <FontAwesomeIcon icon={icon} /> : <span>{children}</span>}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </B>
  );
}

Button.defaultProps = {
  variant: "primary",
  background: "primary",
  color: "primary",
  size: "md",
  shape: "rounded"
};

// types: primary, secondary, cancel, flat, fifthType
// disabled XX
// loading
// spinner

// types/variants: primary, secondary (pill), flat, icon, link
