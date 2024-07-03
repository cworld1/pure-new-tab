import "./style.css";
import "@/assets/global.css";
import OptionsComponent from "@/components/options";
import { applyPrefStyle } from "@/components/utils";

async function setup(app: HTMLDivElement) {
  app.innerHTML = `
    <main>
      <h1>Settings</h1>
      <options-component />
    </main>
  `;
  customElements.define("options-component", OptionsComponent);
  await applyPrefStyle(app);
}

setup(document.querySelector<HTMLDivElement>("#app")!);
