import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { onSubmit } from "./components/BookingForm";
// import userEvent from "@testing-library/user-event";
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

test("guests input field has correct HTML validation attributes", () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("submits the form when all values are valid", async () => {
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={["12:00", "12:30", "13:00"]}
      selectedDate={new Date()}
      handleDateChange={() => {}}
      submitForm={submitForm}
    />
  );

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeInTheDocument();
  fireEvent.change(guestsInput, { target: { value: "3" } });

  expect(guestsInput.value).toBe("3");

  const occasionInput = screen.getByLabelText("Occasion");
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  expect(occasionInput.value).toBe("Birthday");

  const submitElement = screen.getByText(/Make Your reservation/);
  // expect(submitElement).toBeDisabled();

  fireEvent.click(submitElement);
  // expect(submitForm).toHaveBeenCalledTimes(1);
});
