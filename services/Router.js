const Router = {
  init: () => {
    document.querySelectorAll("a").forEach((a) => {
        
      a.addEventListener("click", (e) => {
        e.preventDefault;
      });
    });
  },

  go: (route, hasHistory = true) => {},
};

export default Router