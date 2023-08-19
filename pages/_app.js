import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
