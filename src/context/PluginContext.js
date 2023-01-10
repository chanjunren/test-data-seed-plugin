import React from "react";

const PluginContext = React.createContext({
  pluginState: {},
  updateApiListeners: () => {},
});

export default PluginContext;
