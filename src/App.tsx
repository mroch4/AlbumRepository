import ContextProvider from "./contexts/Context";
import Header from "./components/Header";
import Layout from "./components/_Layout";
import React from "react";

function App(): JSX.Element {
  return (
    <ContextProvider>
      <Header>
        <Layout />
      </Header>
    </ContextProvider>
  );
}

export default App;
