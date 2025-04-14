import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import GetBy from "./GetBy/GetBy";
import QueryBy from "./QueryBy/QueryBy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetBy />,
  },
  {
    path: "/QueryBy",
    element: <QueryBy />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
