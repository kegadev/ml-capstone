import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders booking heading", () => {
  render(<BookingForm />);

  const linkElement = screen.getByText(/Choose date/);
  expect(linkElement).toBeInTheDocument();
});
