import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = (props) => {
  // const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (event) => {
    // setDate(event.target.value);
    props.handleDateChange(event);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date: props.selectedDate,
      time: time,
      guests: guests,
      occasion: occasion,
    };
    props.submitForm(formData);
  };

  return (
    <form>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={props.selectedDate}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {props.availableTimes?.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        aria-label="On Click"
        type="submit"
        value="Make Your reservation"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default BookingForm;
