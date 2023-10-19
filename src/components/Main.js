import { Routes, Route } from "react-router-dom";

import About from "./About";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Booking from "./Booking";

const Main = () => {
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
        <Route path="/booking" element={<Booking></Booking>}></Route>
      </Routes>
      <hr />
    </main>
  );
};

export default Main;
