export default class TimeComponent extends HTMLElement {
  timeElements: HTMLElement[] = Array.from({ length: 2 }, () =>
    document.createElement("p")
  );
  dateElement: HTMLElement = document.createElement("p");

  constructor() {
    super();
    this.setupElements();
  }

  setupElements() {
    this.timeElements.forEach((el) => {
      el.classList.add("time");
      el.innerHTML = this.formatTime();
    });
    this.timeElements[1].classList.add("main");
    this.dateElement.classList.add("date");
    this.dateElement.innerHTML = this.formatDate();
    this.append(...this.timeElements, this.dateElement);
  }

  formatTime() {
    // E.g, 17:13
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  formatDate() {
    // E.g. Web, Jul 3
    return new Date().toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  updateTime = () => {
    this.timeElements.forEach((el) => {
      el.innerHTML = this.formatTime();
    });
    this.dateElement.innerHTML = this.formatDate();
  };

  connectedCallback() {
    this.updateTime();
    setInterval(this.updateTime, 1000 * 60);
    this.style.opacity = "1";
  }
}
