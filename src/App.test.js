import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

import { initializeTimes, updateTimes } from "./components/Main";

test("renders booking heading", () => {
  render(<BookingForm />);

  const linkElement = screen.getByText(/Choose date/);
  expect(linkElement).toBeInTheDocument();
});

test("check submit is available in form", () => {
  render(<BookingForm />);
  const submitElement = screen.getByText(/Make Your reservation/);
  expect(submitElement).toBeInTheDocument();
});

test("initializeTimes returns the correct expected value", () => {
  const times = initializeTimes();
  expect(times).toBeTruthy();
});

test("updateTimes returns the correct expected value", () => {
  const times = updateTimes();
  expect(times).toBeTruthy();
});
