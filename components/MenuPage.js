export default class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    this.root.appendChild(style);
    async function styleGet() {
      const data = await fetch("/components/MenuPage.css");
      const content = await data.text();

      style.appendChild(content);
    }
    styleGet()
  }

  connectedCallback() {
    const template = document.querySelector("#menu-page-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);
  }
}
customElements.define("menu-page", MenuPage);
