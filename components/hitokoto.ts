export default class HitokotoComponent extends HTMLElement {
  hitokotoElement: HTMLElement = document.createElement("p");
  fromElement: HTMLElement = document.createElement("p");

  constructor() {
    super();
    this.setupElements();
  }

  setupElements() {
    this.hitokotoElement.classList.add("hitokoto");
    this.fromElement.classList.add("from");
    this.append(this.hitokotoElement, this.fromElement);
  }

  async fetchData() {
    try {
      const response = await fetch("https://v1.hitokoto.cn");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  displayData(data: { hitokoto: string; from: any; from_who: any }) {
    this.hitokotoElement.innerText = data.hitokoto ?? "求知若渴，虚怀若谷";
    this.fromElement.innerText = data.from ?? data.from_who ?? "佚名";
    this.style.opacity = "1";
  }

  async loadHitokoto() {
    const data = await this.fetchData();
    if (data) {
      this.displayData(data);
    }
  }

  connectedCallback() {
    this.loadHitokoto();
    this.addEventListener("click", this.loadHitokoto.bind(this));
  }
}
