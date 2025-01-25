import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import FormComponent from "./Form";
import { vi } from "vitest";

describe("FormComponent()", () => {
  it("submit the form correctly with user input", async () => {
    user.setup();

    const text = "Hello World";

    const submitFn = vi.fn();

    render(<FormComponent onSubmit={submitFn} />);

    const inputEl = screen.getByRole("textbox");

    await user.type(inputEl, text);

    const heading = screen.getByRole("heading", {
      level: 2,
    });

    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    await user.click(submitButton);

    expect(heading).toHaveTextContent(text);
    // test if the submit button was called
    expect(submitFn).toHaveBeenCalledWith(text);
  });
});
