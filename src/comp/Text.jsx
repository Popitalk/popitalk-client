import React from "react";
import styled from "styled-components";
import { color, space, typography, variant } from "styled-system";

const T = styled.p`
  ${variant({
    variants: {
      title1: {
        fontFamily: "primary",
        fontSize: 7,
        fontWeight: "bold"
      },
      title2: {
        fontFamily: "primary",
        fontSize: 6,
        fontWeight: "bold"
      },
      subtitle1: {
        fontFamily: "primary",
        fontSize: 5,
        fontWeight: "bold"
      },
      subtitle2: {
        fontFamily: "primary",
        fontSize: 4,
        fontWeight: "bold"
      },
      button1: {
        fontFamily: "primary",
        fontSize: 3,
        fontWeight: "bold"
      },
      button2: {
        fontFamily: "primary",
        fontSize: 3,
        fontWeight: 400
      },
      text1: {
        fontFamily: "primary",
        fontSize: 2,
        fontWeight: "bold"
      },
      text2: {
        fontFamily: "primary",
        fontSize: 2,
        fontWeight: 400
      },
      small1: {
        fontFamily: "primary",
        fontSize: 1,
        fontWeight: 400
      },
      small2: {
        fontFamily: "primary",
        fontSize: 0,
        fontWeight: 400
      }
    }
  })}
  ${color}
  ${space}
  ${typography}
`;

export default function Text({ variant, children, ...props }) {
  let el;
  if (variant === "title1") el = "h1";
  else if (variant === "title2") el = "h2";
  else if (variant === "subtitle1") el = "h3";
  else if (variant === "subtitle2") el = "h4";
  else if (variant === "button1") el = "h5";
  else if (variant === "button2") el = "h6";
  else if (variant === "text1") el = "p";
  else if (variant === "text2") el = "p";
  else if (variant === "small1") el = "p";
  else if (variant === "small2") el = "p";

  return (
    <T as={el} variant={variant} {...props}>
      {children}
    </T>
  );
}

Text.defaultProps = {
  variant: "text2"
};
