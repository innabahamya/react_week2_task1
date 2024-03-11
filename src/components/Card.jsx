const SuperheroCard = ({ name, image, powers, description }) => {
  return (
    <div className="superhero-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Powers:</strong> {powers.join(', ')}</p>
      <p>{description}</p>
    </div>
  );
};

export default SuperheroCard;