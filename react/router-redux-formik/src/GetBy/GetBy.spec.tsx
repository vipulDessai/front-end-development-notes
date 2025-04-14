import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import GetBy from "./GetBy";

describe("types of queries - GetBy", () => {
  it("getBy...", () => {
    render(<GetBy />);

    const formH2Elem = screen.getByText(/HTML Input Elements in a React Form/i);
    expect(formH2Elem).toBeInTheDocument();

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    expect(firstNameInput).toBeInTheDocument();
  });
});
