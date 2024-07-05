import "./style.css";
import "@/assets/global.css";
import TimeComponent from "@/components/time";
import SentenceComponent from "@/components/sentence";
import FavoriteComponent from "@/components/favorites";
import { applyPrefStyle } from "@/utils/styles";

async function setup(app: HTMLDivElement) {
  await applyPrefStyle(app);
  customElements.define("time-component", TimeComponent);
  customElements.define("sentence-component", SentenceComponent);
  customElements.define("favorite-component", FavoriteComponent);
}

setup(document.querySelector<HTMLDivElement>("#app")!);
