export default class TimeComponent extends HTMLElement {
  timeElements!: HTMLElement[];
  dateElement!: HTMLElement;

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

  updatedate = () => {
    // E.g. Web, Jul 3
    this.dateElement.innerText = new Date().toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  connectedCallback() {
    this.timeElements = Array.from(
      this.querySelectorAll(".time")
    ) as HTMLElement[];
    this.dateElement = this.querySelector(".date") as HTMLElement;

    this.updateTime();
    setInterval(this.updateTime, 1000 * 60);
    this.updatedate();
    this.style.opacity = "1";
  }
}
