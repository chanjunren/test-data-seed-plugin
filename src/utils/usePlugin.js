// https://developer.chrome.com/docs/extensions/reference/webRequest/
import { useReducer } from "react";
import { addChromeWebRequestListener } from "./serviceWorker";
import { formatUrl } from "./urlUtils";

const PLUGIN_ACTIONS = {
  UPDATE_TARGET_URLS: 0,
};
export default function usePlugin(initialState) {
  const pluginReducer = (prevState, action) => {
    switch (action.type) {
      case PLUGIN_ACTIONS.UPDATE_TARGET_URLS: {
        console.log(
          "Adding to chromewebreqlistener: ",
          formatUrl(action.payload)
        );
        addChromeWebRequestListener(formatUrl(action.payload));
        return {
          ...prevState,
          targetUrl: action.payload,
        };
      }
    }
  };

  const [pluginState, dispatch] = useReducer(pluginReducer, initialState);
  function updateApiListeners(urls) {
    dispatch({
      type: PLUGIN_ACTIONS.UPDATE_TARGET_URLS,
      payload: urls,
    });
  }

  return { pluginState, updateApiListeners };
}
