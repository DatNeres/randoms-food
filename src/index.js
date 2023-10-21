import React from "react";
import ReactDOM from "react-dom/client";
import AppObjectConfig from "./components/main/AppObjectConfig";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import RandomsFood from "./routes/RandomsFood";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/App",
      element: <RandomsFood />,
    },
  ],
  { basename: "/randoms-food/" },
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppObjectConfig>
      <RouterProvider router={router} />
    </AppObjectConfig>
  </React.StrictMode>,
);
