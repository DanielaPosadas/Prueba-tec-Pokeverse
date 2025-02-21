
import { home } from "./views/home.js";
import { setRootElement, setRoutes, onURLChange } from "./router.js";
import { favoritos } from "./views/favoritos.js"

const routes = {
  "/": home,
  "/favoritos": favoritos,
};

const viewContainer = document.getElementById('cards-container');


setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location.pathname);
});