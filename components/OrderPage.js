export default class OrderPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    
  }
  connectedCallback() {}
}
customElements.define("order-page", OrderPage);
