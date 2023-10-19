import Testimonial from "./Testimonial";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Rumal",
      image: person1,
      description: "very clean and good service.",
    },
    {
      name: "John Doe",
      image: person2,
      description: "very good place to come back again.",
    },
    {
      name: "Mabel Smith",
      image: person3,
      description: "very good place to come back again.",
    },
    {
      name: "John Ushka",
      image: person4,
      description: "Pasta is really great.",
    },
  ];

  const getTestimonials = () => {
    return testimonials.map((testimonial) => {
      return (
        <Testimonial
          key={testimonial.name}
          name={testimonial.name}
          image={testimonial.image}
          description={testimonial.description}
        ></Testimonial>
      );
    });
  };

  return (
    <div className="testimonials">
      <h2> Testimonials</h2>
      <div className="testimonial-container">{getTestimonials()}</div>
    </div>
  );
};

export default Testimonials;
