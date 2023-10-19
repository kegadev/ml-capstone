import restaurantFood from "../assets/restaurant_food.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1> Little Lemon</h1>
        <h3> Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={restaurantFood} alt="Restaurant food" />
    </div>
  );
};

export default Intro;
