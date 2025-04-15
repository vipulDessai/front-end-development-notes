import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";

import "./index.css";

import { store } from "./reducer";
import {
  RequireAuth,
  rootloader,
  RoutingErrorPage,
  UnauthorizedPage,
} from "./router";

const Login = lazy(() => import("./pages/Login/EnhancedLogin/Login"));
const LegacyLogin = lazy(() => import("./pages/Login/LegacyLogin/LegacyLogin"));
const Products = lazy(() => import("./pages/Products/Edit/EditProduct"));
const EditProduct = lazy(() => import("./pages/Products/Edit/EditProduct"));
const Account = lazy(() => import("./pages/Account/Account"));

const LazyLoader = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <section className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></section>
    </section>
  );
};

const router = createBrowserRouter([
  // Products
  {
    path: "/",
    element: (
      <RequireAuth>
        <Suspense fallback={<LazyLoader />}>
          <Products />
        </Suspense>
      </RequireAuth>
    ),
    errorElement: <RoutingErrorPage />,
    loader: rootloader,
    children: [
      {
        path: "edit",
        element: (
          <RequireAuth>
            <Suspense fallback={<LazyLoader />}>
              <EditProduct />
            </Suspense>
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/account",
    element: (
      <RequireAuth>
        <Suspense fallback={<LazyLoader />}>
          <Account />
        </Suspense>
      </RequireAuth>
    ),
    errorElement: <RoutingErrorPage />,
    loader: rootloader,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    ),
    errorElement: <RoutingErrorPage />,
    loader: rootloader,
    children: [
      {
        path: "legacy-login",
        element: (
          <RequireAuth>
            <Suspense fallback={<LazyLoader />}>
              <LegacyLogin />
            </Suspense>
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/unauthorized",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <UnauthorizedPage />
      </Suspense>
    ),
    errorElement: <RoutingErrorPage />,
    loader: rootloader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);
