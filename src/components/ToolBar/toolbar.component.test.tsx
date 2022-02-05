import React from "react";
import { render, screen } from "@testing-library/react";
import Toolbar from ".";

test("renders Toolbar component", () => {
  render(<Toolbar />);
  const toolbarComponentText = screen.getByText("Toolbar");
  expect(toolbarComponentText).toBeInTheDocument();
});
