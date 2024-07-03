import "./style.css";
import TimeComponent from "@/components/time";
import HitokotoComponent from "@/components/hitokoto";
import { applyPrefStyle } from "@/components/utils";

async function setup(app: HTMLDivElement) {
  app.innerHTML = `
    <main>
      <time-component>
      </time-component>
      <hitokoto-component>
      </hitokoto-component>
    </main>`;
  customElements.define("hitokoto-component", HitokotoComponent);
  customElements.define("time-component", TimeComponent);
  await applyPrefStyle(app);
}

setup(document.querySelector<HTMLDivElement>("#app")!);
