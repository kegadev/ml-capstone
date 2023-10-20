import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders booking heading", () => {
  console.log("correr test");
  render(<BookingForm />);
  console.log("Ya se renderizo");

  const linkElement = screen.getByText(/Choose date/);
  expect(linkElement).toBeInTheDocument();
});
