import { FC, ReactNode, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLoaderData,
} from "react-router";
import { Provider } from "react-redux";

import "./index.css";

import App from "./Components/App/App";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { store } from "./reducer";
import {
  RequireAuth,
  rootloader,
  RoutingErrorPage,
  UnauthorizedPage,
} from "./router";
import { useInit } from "./hooks";

function Root() {
  // Use the rootLoaderData if common data needs to be fetched
  const rootLoaderData = useLoaderData();

  useInit(() => {
    // Begin code
  });

  return (
    <section className="lapps-ui-react-latest">
      <Outlet />
    </section>
  );
}

const LazyLoader = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <section className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></section>
    </section>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RoutingErrorPage />,
    loader: rootloader,
    children: [
      {
        path: "dashboard",
        element: (
          <RequireAuth>
            <Suspense fallback={<LazyLoader />}>
              <App />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // use UnauthorizedScreen
        path: "unauthorized",
        element: <UnauthorizedPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);
