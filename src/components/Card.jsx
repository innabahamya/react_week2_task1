function Card(props) {
   
const {title, price, description, imgLink} = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    <img src={imgLink} alt={title}/>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <span className="card-price">${price}</span>
                    <button className="card-add">Заказать</button>
                </div>
            </div>
        );
    }

    export default Card