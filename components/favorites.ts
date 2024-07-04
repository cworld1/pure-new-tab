import { setupFavList } from "@/components/utils";

export default class FavoriteComponent extends HTMLElement {
  listContainer!: HTMLDivElement;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <h2>Favorite</h2>
        <div class="fav">
          <h2>Favorite</h2>
          <div class="list">
          </div>
      </div>`;
    this.listContainer = this.querySelector(".list")!;
    setupFavList(this.listContainer);
  }
}
