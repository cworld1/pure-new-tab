import browser from "webextension-polyfill";

export default class HitokotoComponent extends HTMLElement {
  hitokotoElement!: HTMLElement;
  fromElement!: HTMLElement;
  containerElement!: HTMLElement;

  constructor() {
    super();
  }

  loadHitokoto = () => {
    browser.runtime.sendMessage("getHitokoto").then((response) => {
      this.hitokotoElement.innerText = response.hitokoto ?? "Loading failed";
      this.fromElement.innerText = response.from ?? "Loading failed";
      this.containerElement.style.opacity = "1";
    });
  };

  connectedCallback() {
    this.hitokotoElement = this.querySelector(".hitokoto") as HTMLElement;
    this.fromElement = this.querySelector(".from") as HTMLElement;
    this.containerElement = this.querySelector(".container") as HTMLElement;

    this.loadHitokoto();
    this.containerElement.addEventListener("click", this.loadHitokoto);
  }
}
