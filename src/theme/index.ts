import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Rubik, sans-serif",
    heading: "Rubik, sans-serif",
    mono: "Rubik, sans-serif",
  },
  colors: {
    primary: {
      100: "#F5D298",
      200: "#F4CB87",
      300: "#F2C376",
      400: "#F1BC65",
      500: "#EFB454",
      600: "#D7A24C",
      700: "#BF9043",
      800: "#A77E3B",
      900: "#8F6C32",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Rubik, sans-serif",
        _focus: {
          outline: "none",
          boxShadow: "unset",
        },
      },
    },
    a: {
      _hover: {
        texteDecoration: "none",
      },
    },
  },
  breakpoints: {
    sm: "30em", // starts at 480px
    md: "48em", // starts at 768px
    lg: "62em", // starts at 992px
    xl: "80em", // starts at 1280px
    "2xl": "96em", // starts at 1536px
    "3xl": "112em", // starts at 1792px
  },
});

export default theme;
