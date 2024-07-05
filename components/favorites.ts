import { setupFavList } from "@/utils/components";

export default class FavoriteComponent extends HTMLElement {
  listContainer!: HTMLDivElement;

  constructor() {
    super();
  }

  async connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <h2>Favorite</h2>
        <div class="fav">
          <h2>Favorite</h2>
          <div class="list">
          </div>
      </div>`;
    this.listContainer = this.querySelector(".list")!;
    if (await setupFavList(this.listContainer)) this.style.opacity = "1";
    else this.style.display = "none";
  }
}
