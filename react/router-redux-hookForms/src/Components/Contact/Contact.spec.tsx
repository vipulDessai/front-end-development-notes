import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Contact from "./Contact";

describe("Contact component", () => {
  it("should allow user input and handle submit", async () => {
    // 1. Render the component
    render(<Contact />);

    // 2. Get the input elements
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement; //Added type assertion
    const passwordInput = screen.getByLabelText(
      /Password/i,
    ) as HTMLInputElement; //Added type assertion
    const submitButton = screen.getByRole("button", { name: /Sign in/i });

    // 3. Simulate user input
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // 4. Simulate clicking the submit button
    fireEvent.click(submitButton);

    // 5. Assert the expected behavior
    //  * We'll check if the popup is displayed.  You might need to adjust this
    //     depending on how your popup is implemented (e.g., if it's in an
    //     Aysnc call, you might need to use `await findBy...` instead of `getBy...`).
    const popupTitle = await screen.findByText(/Sign In Successful/i);
    expect(popupTitle).toBeInTheDocument();

    // 6. Optionally, you could add more assertions:
    // * Check if the form submission handler was called with the correct values (if you're mocking it).
    // * Check if the input fields are cleared after submission (if that's your logic).
  });
});
