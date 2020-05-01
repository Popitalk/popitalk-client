const children = [
  "children",
  "default",
  "children-first",
  "children-last",
  "children-odd",
  "children-even",
  "children-not-first",
  "children-hover",
  "hover",
  "children-focus",
  "focus",
  "children-focus-within",
  "focus-within",
  "children-active",
  "active",
  "children-visited",
  "visited",
  "children-disabled",
  "disabled",
  "first",
  "responsive"
];

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      sans: [
        '"Noto Sans"',
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    colors: {
      transparent: "transparent",
      primaryBackground: "#FFFFFF",
      secondaryBackground: "#F2F2F2",
      tertiaryBackground: "#EBEBEB",
      quaternaryBackground: "#D3D3D3",
      disabledBackground: "#F2F2F2",
      highlightBackground: "#D3ECFF",
      primaryText: "#000000",
      secondaryText: "#A5A5A5",
      tertiaryText: "#FFFFFF",
      liveBackground: "#DE0000",
      liveText: "#FFFFFF",
      yyy: "#ABC",
      highlightText: "#1DA4FE",
      linkText: "#1DA4FE",
      errorText: "#FF4040",
      disabledText: "#a5a5a5",
      onlineColor: "#24E601",
      notificationsColor: "#FF4040",
      primaryBorder: "#e2e2e2",
      secondaryBorder: "#D9D9D9",
      tertiaryBorder: "#A5A5A5",
      imageBorder1: "transparent",
      imageBorder2: "#FFFFFF",
      primaryButtonText: "#FFFFFF",
      secondaryButtonText: "#A5A5A5",
      pink: "#F966F8",
      black: "#000000"
    },
    gradients: {
      primary: ["#76FCFF 0%", "#F966F8 52%", "#E8BBA2 100%"],
      button: ["#009DFF 0%", "#5ABEFC 100%"],
      search: ["#98E4FA 0%", "#00C3FF 100%"],
      cancel: ["#FA3535 0%", "#FC5AA5 100%"],
      channelCardOverlay: ["#000 0%", "transparent 40%"],
      upload: ["#03f5ff 0%", "#f500ff 100%"]
    },
    linearGradientColors: theme => theme("gradients"),
    radialGradientColors: theme => theme("gradients"),
    conicGradientColors: theme => theme("gradients"),
    filter: {
      none: "none",
      "brightness-8": "brightness(0.8)",
      "brightness-9": "brightness(0.9)",
      invert: "invert(1)"
    },
    extend: {
      borderWidth: {
        thin: "thin"
      },
      borderRadius: {
        xl: "15px",
        pill: "9999px",
        circle: "50%"
      },
      gap: {
        thin: "thin",
        smm: "0.1rem"
      },
      transitionProperty: {
        filter: "filter"
      },
      width: {
        dropdown: "26rem"
      }
    }
  },
  variants: {
    margin: children,
    padding: children,
    backgroundColor: ["responsive", "hover", "group-hover", "disabled"],
    color: ["responsive", "hover"],
    cursor: ["responsive", "hover", "disabled"],
    opacity: ["responsive", "hover"],
    visibility: ["responsive", "group-hover"],
    filter: ["responsive", "hover", "active", "group-hover"]
  },
  plugins: [
    require("tailwindcss-gradients"),
    require("tailwindcss-filters"),
    require("tailwindcss-children")
  ]
};
