import stars from "../assets/5stars.png";

const Testimonial = ({ name, image, description }) => {
  return (
    <div className="testimonial">
      <img className="testimonial-stars" src={stars} alt="5 stars" />
      <img className="testimonial-photo" src={image} alt={`${name}  image`} />
      <h3>{name}</h3>
      <p>"{description}"</p>
    </div>
  );
};

export default Testimonial;
