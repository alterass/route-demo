import RouteConfig from "./route-config";

const routes = [
  new RouteConfig("/", () => import("./pages/home")),
  new RouteConfig("/other", () => import("./pages/other")),
];

export default routes;
