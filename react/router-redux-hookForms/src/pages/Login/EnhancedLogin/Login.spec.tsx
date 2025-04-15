import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Login from "./Login";

describe("Dasboard", () => {
  it("Loads", () => {
    render(<Login />);

    expect(true).toBeTruthy();
  });
});
