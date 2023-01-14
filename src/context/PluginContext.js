import React from "react";

const PluginContext = React.createContext({
  pluginState: {},
  addApiListener: () => {},
  removeApiListener: () => {}
});

export default PluginContext;
