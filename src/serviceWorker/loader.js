import { GET_REQ, POST_REQ } from "../utils/constants";

export function addChromeWebRequestListener(url) {
  console.log("Adding listener...");
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      if (details.method === GET_REQ) {
        console.log("Get Req Headers: ", details.url);
      } else if (details.method === POST_REQ) {
        console.log("Post body: ", details.requestBody);
      }
    },
    { urls: [url] },
    ["requestBody"]
  );
}
