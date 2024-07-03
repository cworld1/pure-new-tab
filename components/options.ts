import { storage } from "wxt/storage";

export default class OptionsComponent extends HTMLElement {
  copriltElement!: HTMLInputElement;
  copridkElement!: HTMLInputElement;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h2>Palette</h2>
      <div class="card">
        <div>
          <label for="color-primary">Primary Color Light</label>
          <input type="color" id="color-primary-light" name="color-primary-light" value="#c3cfe2" />
        </div>
        <div>
          <label for="color-primary">Primary Color Dark</label>
          <input type="color" id="color-primary-dark" name="color-primary-dark" value="#565c66" />
        </div>
      </div>`;
    this.copriltElement = this.querySelector(
      "#color-primary-light"
    ) as HTMLInputElement;
    this.copridkElement = this.querySelector(
      "#color-primary-dark"
    ) as HTMLInputElement;

    this.restoreOptions();
    this.listenOptions();
  }

  async restoreOptions() {
    const options = await storage.getMeta("local:preference");
    if (options.colorPrimaryLight) {
      this.copriltElement.value = options.colorPrimaryLight.toString();
    }
    if (options.colorPrimaryDark) {
      this.copridkElement.value = options.colorPrimaryDark.toString();
    }
  }

  listenOptions() {
    this.copriltElement.addEventListener("change", () => {
      storage.setMeta("local:preference", {
        colorPrimaryLight: this.copriltElement.value,
      });
    });
    this.copridkElement.addEventListener("change", () => {
      storage.setMeta("local:preference", {
        colorPrimaryDark: this.copridkElement.value,
      });
    });
  }
}
