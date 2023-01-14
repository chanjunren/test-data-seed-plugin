import React from "react";
import usePlugin from "./utils/usePlugin";
import HomePage from "./features/Home/HomePage";
import TestQueue from "./features/TestQueue/TestQueue";
import PluginContext from "./context/PluginContext";

export function App() {
  const INITIAL_STATE = {
    urls: [],
    unprocessedTests: [],
  }

  const contextValue = usePlugin(INITIAL_STATE)
  const {pluginState} = contextValue

  const pluginContent = pluginState.unprocessedTests.length > 0 ? (
      <TestQueue />
    ) : (
      <HomePage />
    );

  return (
    <PluginContext.Provider value={contextValue}>
      {pluginContent}
    </PluginContext.Provider>
  );
}
