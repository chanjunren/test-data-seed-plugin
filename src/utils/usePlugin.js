// https://developer.chrome.com/docs/extensions/reference/webRequest/
import { useReducer } from "react";

const PLUGIN_ACTIONS = {
  SET_TARGET_URL: 0,
};
export default function usePlugin(initialState) {
  const pluginReducer = (prevState, action) => {
    switch (action.type) {
      case PLUGIN_ACTIONS.SET_TARGET_URL: {
        return {
          ...prevState,
          targetUrl: action.payload,
        };
      }
    }
  };

  const [pluginState, dispatch] = useReducer(pluginReducer, initialState);
  function setTargetUrlHandler(e) {
    dispatch({
      type: PLUGIN_ACTIONS.SET_TARGET_URL,
      payload: e.target.value,
    });
  }

  return { pluginState, setTargetUrlHandler };
}
