import { Outlet, useLoaderData } from "react-router";
import { useInit } from "../../hooks";

export default function Products({}) {
  // Use the rootLoaderData if common data needs to be fetched
  const rootLoaderData = useLoaderData();

  useInit(() => {
    // Begin code
  });

  return (
    <section className="products=dashboard">
      <Outlet />
    </section>
  );
}
