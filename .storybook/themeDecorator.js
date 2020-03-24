import React from "react";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primaryBackground: "#FFFFFF",
    secondaryBackground: "#F2F2F2",
    tertiaryBackground: "#EBEBEB",
    quaternaryBackground: "#D3D3D3",
    disabledBackground: "#F2F2F2",
    primaryText: "#000000",
    secondaryText: "#A5A5A5",
    tertiaryText: "#FFFFFF",
    highlightText: "#1DA4FE",
    linkText: "#1DA4FE",
    errorText: "#FF4040",
    disabledText: "#a5a5a5",
    onlineColor: "#24E601",
    notificationsColor: "#FF4040",
    primaryBorder: "#D1D1D1",
    secondaryBorder: "#D9D9D9",
    tertiaryBorder: "#A5A5A5"
  },
  gradients: {
    primaryGradient:
      "transparent linear-gradient(90deg, #76FCFF 0%, #F966F8 52%, #E8BBA2 100%) 0% 0% no-repeat padding-box",
    buttonGradient:
      "transparent linear-gradient(180deg, #009DFF 0%, #5ABEFC 100%) 0% 0% no-repeat padding-box",
    searchGradient:
      "transparent linear-gradient(180deg, #98E4FA 0%, #00C3FF 100%) 0% 0% no-repeat padding-box",
    cancelGradient:
      "transparent linear-gradient(180deg, #FA3535 0%, #FC5AA5 100%) 0% 0% no-repeat padding-box"
  },
  fontSizes: {
    title1: 70,
    title2: 34,
    subtitle1: 26,
    subtitle2: 22,
    button1: 20,
    button2: 20,
    text1: 18,
    text2: 18,
    small1: 14,
    small2: 12
  }
};

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
