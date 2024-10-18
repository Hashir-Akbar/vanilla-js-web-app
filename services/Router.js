const Router = {
  init: () => {
    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();

        const url = e.target.getAttribute("href");

        Router.go(url);
      });
    });

    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });
    
    Router.go(location.pathname);
  },

  go: (route, hasHistory = true) => {
    if (hasHistory) {
      history.pushState({ route }, null, route);
    }


    let element = null;
    switch (route) {
      case "/":
        element = document.createElement("h1");
        element.textContent = "Home Page";
        break;
      case "/order":
        element = document.createElement("h1");
        element.textContent = "Order Page";
        break;
    }
    const main = document.querySelector("main");
    main.innerHTML = "";
    if (element) {
      main.appendChild(element);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
