import restaurant from "../assets/restaurant.jpg";
import chef from "../assets/restaurant_chef_B.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Enim nisi nulla sint pariatur. Irure tempor labore sint do qui duis
          adipisicing id aliqua ut. Ullamco sunt cupidatat cupidatat pariatur
          non ea sunt consectetur magna minim velit cillum reprehenderit culpa.
          Anim voluptate dolor Lorem ipsum labore qui nulla eiusmod incididunt
          magna nulla ea sint. Et elit velit enim dolore exercitation est et
          reprehenderit sint anim et occaecat amet aliqua.
        </p>
      </div>
      <div className="about-image-container">
        <img src={restaurant} alt="Restaurant image" />
        <img src={chef} alt="Chef image" />
      </div>
    </div>
  );
};

export default About;
