import Card from "./Card";

const Specials = () => {
  return (
    <>
      <div className="subtitle">
        <h2>Specials </h2>
        <button>Online Menu</button>
      </div>
      <div className="card-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
};

export default Specials;
