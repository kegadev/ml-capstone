import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

import { initializeTimes, updateTimes } from "./components/Main";

test("renders booking heading", () => {
  render(<BookingForm />);

  const linkElement = screen.getByText(/Choose date/);
  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes returns the correct expected value", () => {
  const times = initializeTimes();
  expect(times).toHaveLength(6);
});

test("updateTimes returns the correct expected value", () => {
  const times = updateTimes();
  expect(times).toHaveLength(6);
});
