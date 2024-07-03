import browser from "webextension-polyfill";

export default class HitokotoComponent extends HTMLElement {
  hitokotoElement!: HTMLElement;
  fromElement!: HTMLElement;

  constructor() {
    super();
  }

  loadHitokoto = () => {
    browser.runtime.sendMessage("getHitokoto").then((response) => {
      this.hitokotoElement.innerText = response.hitokoto ?? "Loading failed";
      this.fromElement.innerText = response.from ?? "Loading failed";
    });
  };

  connectedCallback() {
    this.hitokotoElement = this.querySelector(".hitokoto") as HTMLElement;
    this.fromElement = this.querySelector(".from") as HTMLElement;

    this.loadHitokoto();
    this.addEventListener("click", this.loadHitokoto);
    this.style.opacity = "1";
  }
}
