import { render, screen } from "@testing-library/react";
import FruitList from "./FruitList";

const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

describe("FruitList()", () => {
  it("should render the list with list items", () => {
    render(<FruitList fruits={fruits} />);

    const list = screen.getByRole("list");
    const listItem = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItem).toHaveLength(fruits.length);
  });
});
