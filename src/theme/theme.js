import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      bg: "#fcfcfc",
      lightGrey: "#f4f4f4",
      grey: "#dfe4ea",
      darkGrey: "#b2b6bb",
      blue: "#546de5",
      orange: "#f19066"
    },
    secondary : {
      blue: "#778beb",
      orange: "#f3a683"
    },
    grey: {
      
    },
    hover: {
      blue: "#bac4f5"
    }
  },
  styles: {
    global: () => ({
      body: {
        "bg": "#fcfcfc",
      },
    })
  },
  fonts: {
    heading: `'Courgette', sans-serif`,
    body: `'Merriweather', sans-serif`,
  },
});

export default theme;
