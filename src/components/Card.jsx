const CardComponent = {
  width: "500px",
  margin: "30px auto",
  backgroundColor: 'rgb(246, 247, 237)',
  minHeight: "200px",
  boxSizing: "border-box"
}


function Card(props) {
    return (
        <div className="card" style = {CardComponent}>
        
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p><strong>Альтерего: </strong>{props.alterego}</p>
      <p><strong>Род занятий: </strong>{props.occupation}</p>
      <p><strong>Друзья: </strong>{props.friends}</p>
      <p><strong>Суперсилы: </strong>{props.superpowers}</p>
      <p><strong>Информация: </strong>{props.info}</p>
      
    
    </div>
    );
}

export default Card