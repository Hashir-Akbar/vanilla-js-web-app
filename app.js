// import data from "./services/data/menu.json";

window._app = "hel";
// _app.menuData = {};

const $$ = function(args){ return document.querySelectorAll(args);}

document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  console.log($$("template"));
});
