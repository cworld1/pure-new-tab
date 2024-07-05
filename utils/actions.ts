function downloadJson(json: Record<string, any>) {
  const blob = new Blob([JSON.stringify(json)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const time = new Date().toISOString().replace(/[-:]/g, "").split(".")[0];
  a.download = `pure-new-web-${time}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function uploadJson() {
  return new Promise<Record<string, unknown>>((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async () => {
        try {
          const jsonData = JSON.parse(reader.result as string);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      };
    });
  });
}

export { downloadJson, uploadJson };
