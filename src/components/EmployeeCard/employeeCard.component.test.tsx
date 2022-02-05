import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeCard from ".";

test("renders EmployeeCard component", () => {
  render(<EmployeeCard />);
  const employeeCardText = screen.getByText("EmployeeCard");
  expect(employeeCardText).toBeInTheDocument();
});
