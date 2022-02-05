import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from ".";

test("renders Grid component", () => {
  render(<Grid />);
  const gridComponentText = screen.getByText("Grid");
  expect(gridComponentText).toBeInTheDocument();
});
