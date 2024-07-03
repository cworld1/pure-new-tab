import type { Hitokoto } from "./types";

import { browser } from "wxt/browser";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
});

class HitokotoExtension {
  hitokotoData: Hitokoto;

  constructor() {
    this.hitokotoData = {} as Hitokoto;
    // Fetch hitokoto data when extension is loaded
    this.fetchHitokoto();
    // Set auto update interval
    // setInterval(this.fetchHitokoto.bind(this), 3600000);

    browser.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (message === "getHitokoto") {
        (sendResponse as (response: Hitokoto) => void)(this.hitokotoData);

        // Fetch next hitokoto data
        this.fetchHitokoto();
        return true; // keep the channel open for async response
      }
    });
  }

  async fetchHitokoto() {
    const data = await (
      await fetch("https://v1.hitokoto.cn/?encode=json")
    ).json();

    this.hitokotoData = {
      id: data.id,
      hitokoto: data.hitokoto,
      from: data.from_who || data.from,
    };
  }
}

new HitokotoExtension();
