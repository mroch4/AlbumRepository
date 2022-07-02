import React from "react";
import ContextProvider from "./services/Context";
import Layout from "./components/Layout";
import ThemeToggler from "./components/ThemeToggler";

function App(): JSX.Element {
  return (
    <ContextProvider>
      <ThemeToggler>
        <Layout />
      </ThemeToggler>
    </ContextProvider>
  );
}

export default App;
