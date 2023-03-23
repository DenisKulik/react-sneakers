function Card(props) {
    const { img, title, price } = props;

    return (
        <div className="card">
            <div className="favorite">
                <img src={'/react-sneakers/img/unliked.svg'}
                     alt="Unliked" />
            </div>
            <img className="cardImage" width={133}
                 src={img}
                 alt={title} />
            <h5 className="cardHeading">{title}</h5>
            <div className="cardBottom">
                <div className="cardPrice">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="cardBtn">
                    <img src={'/react-sneakers/img/btn-plus.svg'}
                         alt="Add to cart" />
                </button>
            </div>
        </div>
    );
}

export default Card;