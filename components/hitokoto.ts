type Hitokoto = {
  hitokoto: string;
  from: string;
};

export default class HitokotoComponent extends HTMLElement {
  hitokotoElement!: HTMLElement;
  fromElement!: HTMLElement;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <p class="hitokoto">Loading...</p>
      <p class="from">...</p>
    `;
    this.hitokotoElement = this.querySelector(".hitokoto")!;
    this.fromElement = this.querySelector(".from")!;

    this.loadHitokoto();
    this.addEventListener("click", this.loadHitokoto.bind(this));
  }

  async fetchData() {
    try {
      const response = await fetch("https://v1.hitokoto.cn");
      const data = await response.json();
      return {
        hitokoto: data.hitokoto,
        from: data.from ?? data.from_who,
      } as Hitokoto;
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        hitokoto: "求知若渴，虚怀若谷",
        from: "Loading failed",
      };
    }
  }

  displayData(data: Hitokoto) {
    this.hitokotoElement.innerText = data.hitokoto;
    this.fromElement.innerText = data.from;
    this.style.opacity = "1";
  }

  async loadHitokoto() {
    const data = await this.fetchData();
    if (data) {
      this.displayData(data);
    }
  }
}
