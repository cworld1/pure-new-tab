import browser from "webextension-polyfill";

class HitokotoComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    browser.runtime.sendMessage("getHitokoto").then((response) => {
      let hitokotoElement = this.querySelector("#hitokoto") as HTMLElement;
      if (!hitokotoElement) return;
      hitokotoElement.innerText = response.hitokoto;
    });
  }
}
customElements.define("hitokoto-component", HitokotoComponent);
