import Store from "./Store.js";

const API = {
  url: "../data/menu.json",
  fetchData: async function () {
    const response = await fetch(this.url);

    return await response.json();
  },
};

export default API;

export const MenuLoad = async () => {
  Store.menu = await API.fetchData();
};
