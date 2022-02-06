import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorCard from ".";

const testData = {
    message: "Oups! Something went wrong!"
}

it("renders correct text", () => {
    render(<ErrorCard {...testData} />);
    const name = screen.getByText(testData.message);
    expect(name).toBeInTheDocument();
});
