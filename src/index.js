import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import '@fontsource/courgette/400.css'
import '@fontsource/merriweather/400.css'

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
);