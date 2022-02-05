import React from "react";
import { render, screen } from "@testing-library/react";
import Meet from "./";

test("renders App component", () => {
  render(<Meet />);
  const meetPageText = screen.getByText("Meet");
  const toolbarInMeetPage = screen.getByText("Toolbar");
  const gridInMeetPage = screen.getByText("Grid");
  const employeeCardInGrid = screen.getByText("EmployeeCard");
  expect(toolbarInMeetPage).toBeInTheDocument();
  expect(gridInMeetPage).toBeInTheDocument();
  expect(meetPageText).toBeInTheDocument();
  expect(employeeCardInGrid).toBeInTheDocument();
});
