import { render, screen } from "@testing-library/react";
import UserEvent from "./UserEvent";
import user from "@testing-library/user-event";

describe("UserEvent()", () => {
  it("Renders a counter with initial value 0", () => {
    render(<UserEvent />);

    const heading = screen.getByRole("heading", {
      level: 3,
    });

    expect(heading).toBeInTheDocument();
  });

  it("should increase the love count upon clicking on increase button", async () => {
    user.setup();

    render(<UserEvent />);

    const increaseButton = screen.getByText("Make her love you more!");

    await user.click(increaseButton);

    const heading = screen.getByRole("heading", {
      level: 3,
    });

    expect(heading).toHaveTextContent("Your girlfriend loves you 1 times!");
  });
});
