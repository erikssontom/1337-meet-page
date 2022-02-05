import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeCard from ".";

const testData = {
  name: "Agron Kabashi",
  office: "Lund",
  gitHub: "AgronKabashi",
  twitter: "_agronkabashi",
  linkedIn: "/pub/agron-kabashi/54/6a8/4a6",
  imagePortraitUrl: "https://i.1337co.de/profile/agron-kabashi",
};

it("renders correct text", () => {
  render(<EmployeeCard {...testData} />);
  const name = screen.getByText(testData.name);
  const office = screen.getByText(`Office: ${testData.office}`);
  expect(name).toBeInTheDocument();
  expect(office).toBeInTheDocument();
});

it("renders social links", () => {
  render(<EmployeeCard {...testData} />);
  const socialLinks = screen.getAllByRole("link");

  const amountOfSocials = [
    testData.gitHub,
    testData.linkedIn,
    testData.twitter,
  ].filter((handle) => handle).length;

  expect(amountOfSocials).toBe(socialLinks.length);
});

it("renders image", () => {
  render(<EmployeeCard {...testData} />);
  const img = screen.getByAltText(testData.name);
  expect(img).toBeInTheDocument();
  expect(img.getAttribute("src")).toBe(testData.imagePortraitUrl);
});
