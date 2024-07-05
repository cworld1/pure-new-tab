type Sentence = {
  sentence: string;
  from: string;
};


async function getHitokoto() {
  try {
    const response = await fetch("https://v1.hitokoto.cn");
    const data = await response.json();
    return {
      sentence: data.hitokoto,
      from: data.from ?? data.from_who,
    } as Sentence;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      sentence: "求知若渴，虚怀若谷",
      from: "Load failed",
    };
  }
}
export { getHitokoto };
