const theme = {
  breakpoints: ["768px", "1024px", "1366px"],
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72, 128, 256, 512],
  sizes: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72, 128, 256, 512],
  fontSizes: [12, 14, 18, 20, 22, 26, 34, 70],
  fonts: {
    primary: "Noto Sans, sans-serif"
  },
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
    tertiaryBorder: "#A5A5A5",
    primaryButtonText: "#FFFFFF",
    secondaryButtonText: "#A5A5A5"
  },
  backgrounds: {
    primaryGradient:
      "transparent linear-gradient(90deg, #76FCFF 0%, #F966F8 52%, #E8BBA2 100%)",
    buttonGradient:
      "transparent linear-gradient(180deg, #009DFF 0%, #5ABEFC 100%)",
    searchGradient:
      "transparent linear-gradient(180deg, #98E4FA 0%, #00C3FF 100%)",
    cancelGradient:
      "transparent linear-gradient(180deg, #FA3535 0%, #FC5AA5 100%)"
  },
  icons: {
    globe: "fas fa-globe-americas"
  }
};

export default theme;
