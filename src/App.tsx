import ContextProvider from "./components/Context";
import ContextToggler from "./components/ContextToggler";
import Layout from "./components/_Layout";
import React from "react";

function App(): JSX.Element {
  return (
    <ContextProvider>
      <ContextToggler>
        <Layout />
      </ContextToggler>
    </ContextProvider>
  );
}

export default App;
