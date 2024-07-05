import { getHitokoto } from "@/utils/apis";

type Sentence = {
  sentence: string;
  from: string;
};

export default class SentenceComponent extends HTMLElement {
  sentenceElement!: HTMLElement;
  fromElement!: HTMLElement;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <p class="sentence">Loading...</p>
      <p class="from">...</p>
    `;
    this.sentenceElement = this.querySelector(".sentence")!;
    this.fromElement = this.querySelector(".from")!;

    this.loadSentence();
    this.addEventListener("click", this.loadSentence.bind(this));
  }

  async fetchData() {
    return await getHitokoto();
    // return await getICiba();
    return {
      sentence: "求知若渴，虚怀若谷",
      from: "Load failed",
    };
  }

  displayData(data: Sentence) {}

  async loadSentence() {
    const data = await this.fetchData();
    if (!data) return;
    this.sentenceElement.innerText = data.sentence;
    this.fromElement.innerText = data.from;
    this.style.opacity = "1";
  }
}
