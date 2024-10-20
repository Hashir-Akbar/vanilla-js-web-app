export default class MenuPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.querySelector("#menu-page-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);
  }
}
customElements.define("menu-page", MenuPage);
