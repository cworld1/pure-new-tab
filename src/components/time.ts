export default class TimeComponent extends HTMLElement {
  timeElement!: HTMLElement;

  constructor() {
    super();
  }

  updateTime = () => {
    // set time (remove seconds, 24hours)
    this.timeElement.innerText = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  connectedCallback() {
    this.timeElement = this.querySelector(".time") as HTMLElement;
    this.updateTime();

    setInterval(this.updateTime, 1000 * 60);
  }
}
