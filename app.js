import API, { MenuLoad } from "./services/API.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

window._app = {};
_app.store = Store;



document.addEventListener("DOMContentLoaded", async () => {
  MenuLoad();
  Router.init()
  console.log("hi");
  
});
