export default class TimeComponent extends HTMLElement {
  timeElement!: HTMLElement;
  dateElement!: HTMLElement;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <p class="time">00:00</p>
      <p class="date">Sun, Jan 1</p>`;
    this.timeElement = this.querySelector(".time")!;
    this.dateElement = this.querySelector(".date")!;

    this.updateTime();
    setInterval(this.updateTime, 1000 * 60);
  }

  formatTime(date: Date) {
    // E.g, 17:13
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  formatDate(date: Date) {
    // E.g. Web, Jul 3
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  updateTime = () => {
    const date = new Date();

    this.timeElement.dataset.descr = this.timeElement.innerHTML =
      this.formatTime(date);
    this.dateElement.innerHTML = this.formatDate(date);
    this.style.opacity = "1";
  };
}
