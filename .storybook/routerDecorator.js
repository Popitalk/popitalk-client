import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
const history = createBrowserHistory();

const ThemeDecorator = storyFn => (
  <Router history={history}>{storyFn()}</Router>
);

export default ThemeDecorator;
