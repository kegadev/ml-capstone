import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";

import About from "./About";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
import { fetchAPI, submitAPI } from "../api/fakeAPI";
import ConfirmedBooking from "./ConfirmedBooking";

const initializeTimes = (date) => {
  let myDate = date;

  if (isNaN(new Date(date))) {
    // If it's not a valid date, create a new Date object representing the current date and time
    myDate = new Date();
  }

  return fetchAPI(myDate);
  // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function updateTimes(state, date) {
  return { availableTimes: fetchAPI(new Date(date)) };
}

const Main = () => {
  const initialState = { availableTimes: initializeTimes(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    const value = event.target.value;

    setSelectedDate(value);
    dispatch(value);
  };

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/bookingConfirmed");
    }
  }
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro></Intro>
              <Specials></Specials>
              <Testimonials> </Testimonials>
              <About></About>
            </>
          }
        ></Route>
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              submitForm={submitForm}
            ></Booking>
          }
        ></Route>
        <Route
          path="/bookingConfirmed"
          element={<ConfirmedBooking></ConfirmedBooking>}
        ></Route>
      </Routes>
      <hr />
    </main>
  );
};

export { initializeTimes, updateTimes };
export default Main;
