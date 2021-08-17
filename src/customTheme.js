import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#DAEDA5",
    200: "#CDE787",
    300: "#C2E26B",
    400: "#B8DD52",
    500: "#AFD83B",
    600: "#A3CE29",
    700: "#93B925",
    800: "#84A721",
    900: "#77961E",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
