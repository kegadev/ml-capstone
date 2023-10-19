import Card from "./Card";
import bruchetta from "../assets/bruchetta.png";
import greekSalad from "../assets/greek-salad.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const Specials = () => {
  const specials = [
    {
      title: "Bruchetta",
      description:
        "Bruschetta is an Italian appetizer that typically consists of grilled bread rubbed with garlic and topped with olive oil and salt. It can also be topped with a variety of ingredients such as tomatoes, basil, and mozzarella cheese.",
      image: bruchetta,
    },
    {
      title: "Greek salad",
      description:
        "Greek salad is a fresh and vibrant Mediterranean dish made with tomatoes, cucumbers, olives, feta cheese, and a dressing of olive oil and herbs.",
      image: greekSalad,
    },
    {
      title: "Lemon Dessert",
      description:
        "Lemon cake is a sweet and zesty dessert, typically a soft and moist cake infused with lemon juice and zest, topped with a lemon glaze or frosting.",
      image: lemonDessert,
    },
  ];

  const getCards = () => {
    return specials.map((special) => {
      return (
        <Card
          title={special.title}
          description={special.description}
          image={special.image}
        ></Card>
      );
    });
  };

  return (
    <div className="specials">
      <div className="subtitle">
        <h2>Specials </h2>
        <button>Online Menu</button>
      </div>
      <div className="card-container">{getCards()}</div>
    </div>
  );
};

export default Specials;
