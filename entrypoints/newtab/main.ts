import "./style.css";
import "@/assets/global.css";
import TimeComponent from "@/components/time";
import HitokotoComponent from "@/components/hitokoto";
import FavoriteComponent from "@/components/favorites";
import { applyPrefStyle } from "@/utils/styles";

async function setup(app: HTMLDivElement) {
  app.innerHTML = `
    <main>
      <time-component></time-component>
      <hitokoto-component></hitokoto-component>
      <favorite-component></favorite-component>
    </main>`;
  await applyPrefStyle(app);
  customElements.define("time-component", TimeComponent);
  customElements.define("hitokoto-component", HitokotoComponent);
  customElements.define("favorite-component", FavoriteComponent);
}

setup(document.querySelector<HTMLDivElement>("#app")!);
