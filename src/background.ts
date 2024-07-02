import type { Hitokoto } from "./types";

import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

class HitokotoExtension {
  hitokotoData: Hitokoto;

  constructor() {
    this.hitokotoData = {} as Hitokoto;
    // Fetch hitokoto data when extension is loaded
    this.fetchHitokoto();
    // Set auto update interval
    // setInterval(this.fetchHitokoto.bind(this), 3600000);

    browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message === "getHitokoto") {
        (sendResponse as (response: Hitokoto) => void)(this.hitokotoData);

        this.fetchHitokoto();
        return true; // keep the channel open for async response
      }
    });
  }

  async fetchHitokoto() {
    const response = await fetch("https://v1.hitokoto.cn");
    const { id, hitokoto, from, from_who } = await response.json();
    this.hitokotoData = { id, hitokoto, from: from_who || from };
  }
}

new HitokotoExtension();
