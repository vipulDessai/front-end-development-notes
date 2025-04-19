import { NavLink, Outlet } from "react-router";

import "./App.css";

import {
  VirtualizedListPath,
  VirtualizedListRouteName,
} from "./pages/VirtualizedList/VirtualizedList";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to={VirtualizedListPath} end>
              {VirtualizedListRouteName}
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>©Copyright {new Date().getFullYear()} - My App</footer>
    </>
  );
}

export default App;
