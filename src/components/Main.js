import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";

import About from "./About";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Booking from "./Booking";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  // Update available times based on selected date
  // For now, just return the same available times regardless of the date
  return initializeTimes();
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    const value = event.target.value;

    setSelectedDate(value);
    dispatch(value);
  };

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
              availableTimes={availableTimes}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            ></Booking>
          }
        ></Route>
      </Routes>
      <hr />
    </main>
  );
};

export { initializeTimes, updateTimes };
export default Main;
