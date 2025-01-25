import { render, screen } from "@testing-library/react";
import Users from "./User";

// getByPlaceholderText
// getByText => div, p, span etc.
// getByLabelText and its selector options
// getByAltText
// getByTitle
// getByDisplayValue
// getByTestId => data-testId

describe("Users()", () => {
  it("should render input box correctly", () => {
    render(<Users />);

    const element = screen.getByRole("textbox", {
      name: "Name",
    });

    // const element2 = screen.getByPlaceholderText("User name");
    // const element2 = screen.getByText("Enter the form data");
    // const element2 = screen.getByLabelText("Email", {
    //   selector: "input",
    // });
    // const element2 = screen.getByAltText("person");
    // const element2 = screen.getByTitle("open");
    // const element2 = screen.getByDisplayValue("PH");
    const element2 = screen.getByTestId("paragraph");

    const headingElement = screen.getByRole("heading", {
      level: 1,
    });

    const button = screen.queryByRole("button", {
      name: "Edit",
    });

    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
