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

      /** BACKGROUNDS */
      primaryBackground: "#FFFFFF",
      secondaryBackground: "#F5F5F5",
      tertiaryBackground: "#F2F2F2",
      quaternaryBackground: "#1DA4FE",
      disabledBackground: "#F2F2F2",
      highlightBackground: "#D3ECFF",
      liveBackground: "#DE0000",

      /** TEXTS */
      primaryText: "#000000",
      secondaryText: "#A5A5A5",
      tertiaryText: "#FFFFFF",
      liveText: "#FFFFFF",
      yyy: "#ABC",
      highlightText: "#1DA4FE",
      linkText: "#1DA4FE",
      errorText: "#FF4040",
      disabledText: "#a5a5a5",

      /** BUTTON TEXT */
      primaryButtonText: "#FFFFFF",
      secondaryButtonText: "#A5A5A5",

      /** BORDER */
      primaryBorder: "#e2e2e2",
      secondaryBorder: "#D9D9D9",
      tertiaryBorder: "#A5A5A5",
      imageBorder1: "transparent",
      imageBorder2: "#FFFFFF",

      /** OTHERS */
      pink: "#F966F8",
      black: "#000000",
      onlineColor: "#00CD46",
      notificationsColor: "#FF0000",
      playerControlsHover: "rgba(255, 255, 255, 0.4)"
    },
    gradients: {
      primary: ["#76BDFF 20.56%", "#FF66FE 51.9%", "#FFC4AB 89.93%"],
      button: ["#5ABEFC 0%", "#009DFF 100%"],
      search: ["#98E4FA 0%", "#00C3FF 100%"],
      cancel: ["#FC6D5A 0%", "#FA3535 100%"],
      channelCardOverlay: ["#000 0%", "transparent 40%"],
      upload: ["#03f5ff 0%", "#f500ff 100%"],
      player: [
        "rgba(0, 0, 0, 0.8) 0%",
        "rgba(0, 0, 0, 0.1) 34.52%",
        "rgba(0, 0, 0, 0) 100%"
      ]
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
      boxShadow: {
        search: "0px 1px 2px rgba(0, 0, 0, 0.25)",
        channel: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        suggestions: "0px 3px 6px rgba(0, 0, 0, 0.16);"
      },
      width: {
        dropdown: "26rem"
      },
      height: {
        chatBox: "27rem",
        chatChild: "24rem"
      },
      gridTemplateColumns: {
        chat: "2.5rem 1fr auto;"
      }
    }
  },
  variants: {
    margin: children,
    padding: children,
    backgroundColor: ["responsive", "hover", "group-hover", "disabled"],
    color: ["responsive", "hover"],
    cursor: ["responsive", "hover", "disabled"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    visibility: ["responsive", "group-hover"],
    filter: ["responsive", "hover", "active", "group-hover"],
    linearGradients: ["responsive", "hover", "active", "group-hover"]
  },
  plugins: [
    require("tailwindcss-gradients"),
    require("tailwindcss-filters"),
    require("tailwindcss-children")
  ]
};
