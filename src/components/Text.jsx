import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";

const baseStyle = css`
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
`;

const texts = {
  title1: {
    tag: "h1",
    style: css`
      font-size: 70px;
      font-weight: bold;
    `
  },
  title2: {
    tag: "h2",
    style: css`
      font-size: 34px;
      font-weight: bold;
    `
  },
  subtitle1: {
    tag: "h3",
    style: css`
      font-size: 26px;
      font-weight: bold;
    `
  },
  subtitle2: {
    tag: "h4",
    style: css`
      font-size: 22px;
      font-weight: bold;
    `
  },
  button1: {
    tag: "p",
    style: css`
      font-size: 20px;
      font-weight: bold;
    `
  },
  button2: {
    tag: "p",
    style: css`
      font-size: 20px;
    `
  },
  text1: {
    tag: "p",
    style: css`
      font-size: 18px;
      font-weight: bold;
    `
  },
  text2: {
    tag: "p",
    style: css`
      font-size: 18px;
    `
  },
  small1: {
    tag: "p",
    style: css`
      font-size: 14px;
    `
  },
  small2: {
    tag: "p",
    style: css`
      font-size: 12px;
    `
  }
};

const textStyle = props => css`
  ${baseStyle}
  ${texts[props.type]?.style}
  color: ${props.color};
`;

export default function Text({ type, color, children }) {
  const theme = useTheme();
  const Tag = texts[type]?.tag || "p";
  const textColor = theme.colors[color] || theme.colors.primaryText;

  const options = {
    type,
    color: textColor
  };

  return <Tag className={textStyle(options)}>{children}</Tag>;
}
