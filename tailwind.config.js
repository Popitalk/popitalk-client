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
    truncate: {
      lines: {
        2: "2",
        3: "3",
        5: "5"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px"
    },
    fontFamily: {
      sans: [
        '"Noto Sans"',
        "-system-ui",
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
      /* == COLOR VALUES CAN BE EDITED IN `tailwind.pcss` == */
      /* == BACKGROUND COLOR. EX) className="bg-background-primary" == */
      background: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        tertiary: "var(--color-bg-tertiary)",
        quaternary: "var(--color-bg-quaternary)",
        disabled: "var(--color-bg-disabled)",
        highlight: "var(--color-bg-highlight)",
        search: "#00C3FF",
        ad: "#fff"
      },

      /* == TEXT COLOR. EX) className="text-copy-primary" == */
      copy: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        highlight: "var(--color-text-highlight)",
        link: "var(--color-text-link)",
        error: "var(--color-text-error)",
        disabled: "var(--color-text-disabled)"
      },

      /* == BORDER COLOR. EX) className="border-outline-primary" == */
      outline: {
        primary: "var(--color-border-primary)",
        image1: "var(--color-border-image1)",
        image2: "var(--color-border-image2)"
      },

      /* == HOVER COLOR. EX) className="hover:bg-hover-highlight" == */
      hover: {
        highlight: "var(--color-hover-highlight)",
        selected: "var(--color-hover-selected)"
      },

      /** BUTTON TEXT */
      primaryButtonText: "#FFFFFF",
      secondaryButtonText: "#A5A5A5",

      /** OTHERS */
      pink: "#F966F8",
      black: "#000000",
      yellow: "#FFFF00",
      onlineColor: "#00E14D",
      notificationsColor: "#FF0000",
      playerControlsHover: "rgba(255, 255, 255, 0.2)"
    },
    gradients: {
      primary: ["#76BDFF 20.56%", "#FF66FE 51.9%", "#FFC4AB 89.93%"],
      button: ["#5ABEFC 0%", "#009DFF 100%"],
      bgColor: ["#F5F5F5 0%", "#F5F5F5 100%"],
      search: ["#98E4FA 0%", "#00C3FF 100%"],
      cancel: ["#FC6D5A 0%", "#FA3535 100%"],
      upload: ["#03f5ff 0%", "#f500ff 100%"],
      player: [
        "rgba(0, 0, 0, 0.8) 0%",
        "rgba(0, 0, 0, 0.1) 60%",
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
      spacing: {
        0.2: "2px",
        14: "3.5rem",
        18: "4.5rem",
        44: "11rem",
        68: "17rem",
        84: "21rem",
        94: "23rem",
        100: "26rem",
        102: "28rem",
        104: "30rem"
      },
      borderRadius: {
        xl: "15px",
        lg: "13px",
        pill: "10px",
        circle: "50%"
      },
      transitionProperty: {
        filter: "filter"
      },
      boxShadow: {
        search: "0px 1px 2px rgba(0, 0, 0, 0.25)",
        channel: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        suggestions: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        account: "0px 32px 40px 5px rgba(0,0,0,0.25)"
      },
      opacity: {
        95: "0.95"
      },
      width: {
        dropdown: "22rem",
        modal: "36rem"
      },
      height: {
        chatBox: "27rem",
        chatChild: "24rem",
        modalFull: "70vh",
        mobileFull: "90vh",
        withoutHeader: "calc(100vh - 3.5rem)"
      },
      scale: {
        200: "2"
      },
      maxHeight: {
        32: "8rem"
      },
      gridTemplateColumns: {
        chat: "2.5rem 1fr 5rem;",
        services: "repeat(5, 40px);"
      },
      padding: {
        "2px": "2px",
        "16/9": "56.25%",
        "5/4": "80%"
      }
    }
  },
  variants: {
    margin: children,
    padding: children,
    backgroundColor: ["responsive", "hover", "group-hover", "disabled"],
    color: ["responsive", "hover"],
    cursor: ["responsive", "hover", "disabled"],
    display: ["responsive", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    visibility: ["responsive", "group-hover"],
    filter: ["responsive", "hover", "active", "group-hover"],
    linearGradients: ["responsive", "hover", "active", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: [
    require("tailwindcss-gradients"),
    require("tailwindcss-filters"),
    require("tailwindcss-children"),
    require("tailwindcss-truncate-multiline")()
  ]
};
