const tabs = await chrome.tabs.query({
  url: [
    "https://developer.chrome.com/docs/webstore/*",
    "https://developer.chrome.com/docs/extensions/*",
  ],
});

// Used to sort titles according to user's language
const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();
for (const tab of tabs) {
  const element = template.content.firstElementChild.cloneNode(true);

  const title = tab.title.split("-")[0].trim();
  const pathName = new URL(tab.url).pathname.slice("/docs".length);

  element.querySelector(".title").textContent = title;
  element.querySelector(".pathname").textContent = pathName;
  element.querySelector("a").addEventListener("click", async () => {
    // focus window and active tab idk
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.window.update(tab.windowId, { focused: true });
  });
  elements.add(element);
}

document.querySelector("ul").append(...elements);

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const tabIds = tabs.map((tab) => tab.id);
  console.log(tabIds);

  chrome.tabs.group({ tabIds: tabIds }, async (tabGroup) => {
    await chrome.tabGroups.update(tabGroup, { title: "Chrome Docs" });
  });
});
