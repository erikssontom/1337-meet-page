import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from ".";
import { Employee } from "types";

it("renders Grid component containing employee cards", async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  const fetchData = async (apiKey: string, endpoint: string) => {
    const res = await fetch(endpoint, {
      headers: { Authorization: apiKey },
    });
    const json = await res.json();
    return json;
  };
  if (!apiKey || !endpoint) return;
  const employees = (await fetchData(apiKey, endpoint)) as Employee[];
  if (!employees) return;
  render(<Grid employees={employees} />);
  const employeeCards = screen.getAllByTestId("employee-card");
  expect(employeeCards.length).toBe(employees.length);
  expect(employeeCards.length).toBeGreaterThan(0);
});

it("Employee cards are visible in grid", async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  const fetchData = async (apiKey: string, endpoint: string) => {
    const res = await fetch(endpoint, {
      headers: { Authorization: apiKey },
    });
    const json = await res.json();
    return json;
  };
  if (!apiKey || !endpoint) return;
  const employees = (await fetchData(apiKey, endpoint)) as Employee[];
  if (!employees) return;
  render(<Grid employees={employees} />);
  const employeeCards = screen.getAllByTestId("employee-card");
  expect(employeeCards.length).toBe(employees.length);
  expect(employeeCards.length).toBeGreaterThan(0);
});
