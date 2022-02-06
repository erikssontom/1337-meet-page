import React from "react";
import { render, screen } from "@testing-library/react";
import Meet from "./";

test("renders App component", () => {
  render(<Meet />);
  const toolbarInMeetPage = screen.getByText("Toolbar");
  expect(toolbarInMeetPage).toBeInTheDocument();
});
