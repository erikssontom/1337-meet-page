import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const appText = screen.getByText("App");
  const meetPageText = screen.getByText("Meet");
  const toolbarInMeetPage = screen.getByText("Toolbar");
  const gridInMeetPage = screen.getByText("Grid");
  const employeeCardInGrid = screen.getByText("EmployeeCard");
  expect(appText).toBeInTheDocument();
  expect(toolbarInMeetPage).toBeInTheDocument();
  expect(gridInMeetPage).toBeInTheDocument();
  expect(meetPageText).toBeInTheDocument();
  expect(employeeCardInGrid).toBeInTheDocument();
});
