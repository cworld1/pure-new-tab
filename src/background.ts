import type { Hitokoto } from "./types";

import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

let hitokotoData: Hitokoto;

async function fetchHitokoto() {
  const response = await fetch("https://v1.hitokoto.cn");
  const { id, hitokoto, from, from_who } = await response.json();
  hitokotoData = { id, hitokoto, from: from_who || from };
}

// 初次加载时获取数据
fetchHitokoto();
// 每小时更新一次数据
setInterval(fetchHitokoto, 3600000);

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "getHitokoto") {
    (sendResponse as (response: Hitokoto) => void)(hitokotoData);

    fetchHitokoto();
    return true; // 保持消息通道打开
  }
});
