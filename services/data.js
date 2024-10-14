const data = {
  url: "../data/menu.json",
  fetchData: async function () {
    const response = await fetch(this.url);
    
    return response;
  },
};


export default data