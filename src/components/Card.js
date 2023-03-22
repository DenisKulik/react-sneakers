function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src={'/react-sneakers/img/unliked.svg'}
                     alt="Unliked" />
            </div>
            <img className="cardImage" width={133}
                 src={'/react-sneakers/img/sneakers/1.jpg'}
                 alt="Nike Blazer Mid Suede" />
            <h5 className="cardHeading">Мужские Кроссовки Nike
                Blazer Mid Suede</h5>
            <div className="cardBottom">
                <div className="cardPrice">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
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