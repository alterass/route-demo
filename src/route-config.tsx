import React, { ComponentType } from "react";
import { Route } from "react-router-dom";

export default class RouteConfig {
  public component: React.LazyExoticComponent<ComponentType>;
  public children?: RouteConfig[];
  constructor(
    public path: string,
    factory: () => Promise<{
      default: ComponentType;
    }>
  ) {
    this.component = React.lazy(factory);
  }
}

export const generateChildren = (routes?: RouteConfig[]) => {
  if (!routes || routes.length === 0) return null;
  return routes.map((route) => {
    const Child = route.component;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <React.Suspense fallback={<>...</>}>
            <Child />
          </React.Suspense>
        }
      >
        {generateChildren(route.children)}
      </Route>
    );
  });
};
