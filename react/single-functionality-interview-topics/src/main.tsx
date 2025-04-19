import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { VirtualizedListNav } from "./pages/VirtualizedList/VirtualizedList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [VirtualizedListNav],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
