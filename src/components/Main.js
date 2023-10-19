import About from "./About";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <main>
      <Intro></Intro>
      <Specials></Specials>
      <Testimonials> </Testimonials>
      <About></About>
      <div style={{ backgroundColor: "blue", height: "5px" }}></div>
    </main>
  );
};

export default Main;
