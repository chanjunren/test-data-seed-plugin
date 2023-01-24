// https://developer.chrome.com/docs/extensions/reference/webRequest/
import { useReducer } from "react";
import { addChromeWebRequestListener } from "../serviceWorker/loader";
import { appendProdPrefix } from "./urlUtils";

const PLUGIN_ACTIONS = {
  DELETE_URL: 0,
  ADD_URL: 1,
};
export default function usePlugin(initialState) {
  console.log("Use plugin");

  const pluginReducer = (prevState, action) => {
    switch (action.type) {
      case PLUGIN_ACTIONS.ADD_URL: {
        console.log(
          "Adding to chromewebreqlistener: ",
          appendProdPrefix(action.payload)
        );
        addChromeWebRequestListener(appendProdPrefix(action.payload));
        return {
          ...prevState,
          urls: [...prevState.urls, action.payload],
        };
      }
      case PLUGIN_ACTIONS.DELETE_URL:
        const newUrls = [...prevState.urls];
        newUrls.splice(action.payload, 1);
        return {
          ...prevState,
          urls: newUrls,
        };
    }
  };

  const [pluginState, dispatch] = useReducer(pluginReducer, initialState);
  function addApiListener(url) {
    dispatch({
      type: PLUGIN_ACTIONS.ADD_URL,
      payload: url,
    });
  }

  function removeApiListener(idx) {
    console.log("Removing ", idx);
    dispatch({
      type: PLUGIN_ACTIONS.DELETE_URL,
      payload: idx,
    });
  }

  return { pluginState, addApiListener, removeApiListener };
}
