import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/tajawal";
import theme from '../src/theme'
import Layout from "./Pages/Layout.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout/ >
    </ChakraProvider>
  );
}

export default App;
