import React from "react";
import ContextProvider from "./services/Context";
import Layout from "./components/Layout";
import ContextToggler from "./components/ContextToggler";

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
