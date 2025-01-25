import { logRoles, render, screen, within } from "@testing-library/react";
import UserTable from "./UserTable";
import { users } from "../../utils/userList";

describe("UserTable()", () => {
  it("should render the table correctly", async () => {
    const { container } = render(<UserTable users={users} />);

    logRoles(container);

    // const welcomeMessage = await screen.findByTestId(
    //   "welcome",
    //   {},
    //   {
    //     timeout: 2000,
    //   }
    // );

    // expect(welcomeMessage).toBeInTheDocument();

    // screen.logTestingPlaygroundURL();
    // screen.debug();
    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    // screen.debug();

    expect(rows).toHaveLength(3);
  });
});
