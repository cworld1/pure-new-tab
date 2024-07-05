import { storage } from "wxt/storage";
import { downloadJson, uploadJson } from "@/utils/actions";

export default class OptionsComponent extends HTMLElement {
  copriltElement!: HTMLInputElement;
  copridkElement!: HTMLInputElement;
  favEnElement!: HTMLInputElement;
  favLiElement!: HTMLTextAreaElement;
  favOpElement!: HTMLInputElement;
  backupElement!: HTMLButtonElement;
  restoreElement!: HTMLButtonElement;

  constructor() {
    super();
  }

  async connectedCallback() {
    this.innerHTML = `
      <h2>Palette</h2>
      <div class="card">
        <div>
          <label for="color-primary-light">Primary Color Light</label>
          <input type="color" id="color-primary-light" name="color-primary-light" value="#c3cfe2" />
        </div>
        <div>
          <label for="color-primary-dark">Primary Color Dark</label>
          <input type="color" id="color-primary-dark" name="color-primary-dark" value="#565c66" />
        </div>
      </div>
      <h2>Favorite</h2>
      <div class="card">
        <div>
          <label for="toggle-favorite-enable">Enable Favorite List</label>
          <input type="checkbox" id="toggle-favorite-enable" name="toggle-favorite-enable" />
        </div>
        <div class="vertical">
          <label for="list-favorite">Favorite List</label>
          <p>Set <samp>Name|link|svg</samp> for each row (recommend to get svg icons on <a href="https://icones.js.org/collection/mingcute" about="_blank">Icônes</a>)</p>
          <textarea rows="5" wrap="off" type="text" id="list-favorite" name="list-favorite">
GMail|https://mail.google.com/mail/u/0/#inbox|<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4zm0 3.414l-6.94 6.94a1.5 1.5 0 0 1-2.12 0L4 7.414V18h16zM18.586 6H5.414L12 12.586z"/></g></svg>
Zerotier|https://my.zerotier.com/network/e3918db483674dee|<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M17.255 1.625a1 1 0 0 1 1.412-.078A9.977 9.977 0 0 1 22 9c0 5.091-3.804 9.294-8.725 9.92l-.275.03V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-1.05a9.997 9.997 0 0 1-7.333-4.42a1 1 0 1 1 1.666-1.107a7.993 7.993 0 0 0 6.36 3.571l.318.006a8 8 0 0 0 5.322-13.963a1 1 0 0 1-.078-1.412M12 2a7 7 0 1 1 0 14a7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10"/></g></svg>
Metacubexd|http://127.0.0.1:9090/ui/#/proxies|<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m13.25 2.567l6.294 3.634a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366a2.5 2.5 0 0 1 1.25-2.165l6.294-3.634a2.5 2.5 0 0 1 2.5 0M5.206 9.232v6.402a.5.5 0 0 0 .25.433l5.544 3.2V12.56zm13.588 0L13 12.56v6.709l5.544-3.201a.5.5 0 0 0 .242-.345l.008-.088zM11.75 4.3L6.206 7.5l5.544 3.201a.5.5 0 0 0 .5 0L17.794 7.5L12.25 4.299a.5.5 0 0 0-.5 0Z"/></g></svg></textarea>
        </div>
        <div>
          <label for="toggle-favorite-link">Open Link in New Tab</label>
          <input type="checkbox" id="toggle-favorite-link" name="toggle-favorite-link" />
        </div>
      </div>
      <h2>Backup & Restore</h2>
      <div class="card">
        <div>
          <label>Backup & Restore</label>
          <div style="display:flex;flex-direction:row;gap:1rem;">
            <button id="btn-backup">Backup</button>
            <button id="btn-restore">Restore</button>
          </div>
        </div>
      </div>
      <button id="test" style="margin-top:2rem">Test</button>
      `;
    this.copriltElement = this.querySelector("#color-primary-light")!;
    this.copridkElement = this.querySelector("#color-primary-dark")!;
    this.copridkElement = this.querySelector("#color-primary-dark")!;
    this.favEnElement = this.querySelector("#toggle-favorite-enable")!;
    this.favLiElement = this.querySelector("#list-favorite")!;
    this.favOpElement = this.querySelector("#toggle-favorite-link")!;
    this.backupElement = this.querySelector("#btn-backup")!;
    this.restoreElement = this.querySelector("#btn-restore")!;

    const options = await storage.getMeta("local:preference");
    this.restoreOptions(options);
    this.listenOptions();
  }

  async restoreOptions(options: Record<string, unknown>) {
    this.copriltElement.value =
      options.colorPrimaryLight?.toString() || "#c3cfe2";
    this.copridkElement.value =
      options.colorPrimaryDark?.toString() || "#565c66";
    this.favEnElement.checked = options.favEnable?.toString() !== "false";
    if (options.favList) this.favLiElement.value = options.favList.toString();
    this.favOpElement.checked = options.favOpen?.toString() === "true";
  }

  listenOptions() {
    const addChangeListener = (
      element: HTMLElement,
      key: string,
      valueExtractor: () => any
    ) => {
      element.addEventListener("change", () =>
        storage.setMeta("local:preference", { [key]: valueExtractor() })
      );
    };

    addChangeListener(
      this.copriltElement,
      "colorPrimaryLight",
      () => this.copriltElement.value
    );
    addChangeListener(
      this.copridkElement,
      "colorPrimaryDark",
      () => this.copridkElement.value
    );
    addChangeListener(
      this.favEnElement,
      "favEnable",
      () => this.favEnElement.checked
    );
    addChangeListener(this.favLiElement, "favList", () =>
      this.favLiElement.value.trim()
    );
    addChangeListener(
      this.favOpElement,
      "favOpen",
      () => this.favOpElement.checked
    );

    this.backupElement.addEventListener("click", () => {
      storage.getMeta("local:preference").then(downloadJson);
    });
    this.restoreElement.addEventListener("click", () => {
      uploadJson()
        .then((data) => {
          // console.log(data);
          storage.setMeta("local:preference", data);
          this.restoreOptions(data);
        })
        .catch(console.error);
    });

    this.querySelector("#test")!.addEventListener("click", () => {
      storage.removeMeta("local:preference");
      storage.getMeta("local:preference").then(console.log);
    });
  }
}
