import "./style.css";
import "@/assets/global.css";
import OptionsComponent from "@/components/options";
import { applyPrefStyle } from "@/utils/styles";

async function setup(app: HTMLDivElement) {
  customElements.define("options-component", OptionsComponent);
  await applyPrefStyle(app);
}

setup(document.querySelector<HTMLDivElement>("#app")!);
