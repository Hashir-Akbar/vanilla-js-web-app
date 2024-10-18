const Store = {
  menu: null,
  cart: [],
};

export default Store;

class MyElement extends HTMLCollection {
  constructor() {
    super();
  }

  connectedCallback = () => {}
  disconnectedCallback = () => {}
  
}
