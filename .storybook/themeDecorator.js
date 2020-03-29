import React from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "../src/themes/lightTheme";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={lightTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
