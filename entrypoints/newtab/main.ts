import "./style.css";
import TimeComponent from "@/components/time";
import HitokotoComponent from "@/components/hitokoto";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <main>
      <time-component>
      </time-component>
      <hitokoto-component>
      </hitokoto-component>
    </main>
`;

customElements.define("hitokoto-component", HitokotoComponent);
customElements.define("time-component", TimeComponent);
