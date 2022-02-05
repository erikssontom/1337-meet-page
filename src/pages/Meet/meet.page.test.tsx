import React from "react";
import { render, screen } from "@testing-library/react";
import Meet from "./";

test("renders App component", () => {
  render(<Meet />);
  const toolbarInMeetPage = screen.getByText("Toolbar");
  const gridInMeetPage = screen.getByText("Grid");
  expect(toolbarInMeetPage).toBeInTheDocument();
  expect(gridInMeetPage).toBeInTheDocument();
});
