let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRouteElementValue) => {
  rootElement = newRouteElementValue;
};

export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue['/']) {
      ROUTES = newRoutesValue;
    }
  }
};
const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname]({ ...props});
    root.appendChild(template);
  } else {
    const errorTemplate = document.createElement('div');
    errorTemplate.innerHTML = "<h1>Ruta no encontrada</h1>";
    root.appendChild(errorTemplate);
  }
};

export const navigateTo = (pathname) => {
  let URLvisited = window.location.origin + pathname;
  history.pushState({}, "", URLvisited);
  renderView(pathname);
};

export const onURLChange = (pathname) => {
  renderView(pathname);
};
