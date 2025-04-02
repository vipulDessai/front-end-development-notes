import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders the title", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", {
      name: /Vite \+ React/i,
    });
    expect(titleElement).toBeInTheDocument();
  });
});
