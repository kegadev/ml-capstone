const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={`${title}  image`} />
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>

      <h3> Order this</h3>
    </div>
  );
};

export default Card;
