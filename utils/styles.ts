import { storage } from "wxt/storage";

interface PrefStyleOptions {
  colorPrimaryLight?: string;
  colorPrimaryDark?: string;
}

async function applyPrefStyle(app: HTMLDivElement) {
  const options = await storage.getMeta("local:preference");
  const style = document.createElement("style");
  app.appendChild(style);
  updateStyle(style, options);

  // Watch for preference changes
  storage.watch<PrefStyleOptions>("local:preference", (options) => {
    if (options) updateStyle(style, options);
  });
}

function updateStyle(style: HTMLStyleElement, options: PrefStyleOptions) {
  const colorPrimaryLight = options.colorPrimaryLight?.toString() || "#c3cfe2";
  const colorPrimaryDark = options.colorPrimaryDark?.toString() || "#565c66";
  style.textContent = `:root{--primary-color:${colorPrimaryLight}}
  @media(prefers-color-scheme:dark){:root{--primary-color:${colorPrimaryDark}}}`;
}

export { applyPrefStyle };
