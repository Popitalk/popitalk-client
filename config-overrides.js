const { override, addBabelPreset } = require("customize-cra");
const { addReactRefresh } = require("customize-cra-react-refresh");

module.exports = override(
  addReactRefresh({ disableRefreshCheck: true }),
  addBabelPreset("@emotion/babel-preset-css-prop")
);
