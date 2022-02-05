import React from "react";
import { render, screen } from "@testing-library/react";
import MeetPage from "./";

test("renders App component", () => {
  render(<MeetPage />);
  const meetPageText = screen.getByText("MeetPage");
  expect(meetPageText).toBeInTheDocument();
});
