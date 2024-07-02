export default class TimeComponent extends HTMLElement {
  timeElements!: HTMLElement[];
  weekElement!: HTMLElement;

  constructor() {
    super();
  }

  updateTime = () => {
    // set time (remove seconds, 24hours)
    this.timeElements.forEach((el) => {
      el.innerText = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    });
  };

  updateWeek = () => {
    let weeklist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    this.weekElement.innerText = weeklist[new Date().getDay()];
  };

  connectedCallback() {
    this.timeElements = Array.from(
      this.querySelectorAll(".time")
    ) as HTMLElement[];
    this.weekElement = this.querySelector(".week") as HTMLElement;

    this.updateTime();
    setInterval(this.updateTime, 1000 * 60);
    this.updateWeek();
  }
}
