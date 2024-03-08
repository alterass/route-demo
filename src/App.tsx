import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { generateChildren } from "./route-config";
import routes from "./routes";

const NoMatch = () => <h1>404</h1>;

const App: FC = () => {
  return (
    <>
      <React.Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {generateChildren(routes)}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;
