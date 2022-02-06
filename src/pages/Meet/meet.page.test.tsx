import React from "react";
import { render, screen } from "@testing-library/react";
import Meet from "./";



it("renders Toolbar component in Meet", () => {
  render(<Meet />);
  const toolBarSortOn = screen.getByText('Sort on:');
  const toolBarFilterOn = screen.getByText('Filter on:');
  const toolBarOffice = screen.getByText('Office:');
  const toolBarName = screen.getByText('Name:');

  [toolBarSortOn, toolBarFilterOn, toolBarOffice, toolBarName].forEach(elem => expect(elem).toBeInTheDocument())
});

it("renders cards in Meet", async () => {
  render(<Meet />);
  const allCards = await screen.findAllByTestId('employee-card');
  expect(allCards.length).toBeGreaterThan(0);
});