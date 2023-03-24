function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>
                    Корзина
                    <img onClick={onClose}
                         className="closeBtn"
                         src={'/react-sneakers/img/btn-remove.svg'}
                         alt="Close" />
                </h2>

                <div className="items">
                    {
                        items.map((item) => (
                            <div className="cartItem">
                                <div
                                    style={{ backgroundImage: `url(${item.img})` }}
                                    className="cartItemImg">

                                </div>
                                <div className="cartItemInner">
                                    <p>{item.title}</p>
                                    <b>{item.price} руб.</b>
                                </div>
                                <img className="removeBtn"
                                     src={'/react-sneakers/img/btn-remove.svg'}
                                     alt="Remove" />
                            </div>
                        ))
                    }
                </div>

                <div className="cartTotal">
                    <ul>
                        <li className="cartTotalItem">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="cartTotalItem">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>

                    <button className="greenBtn">
                        Оформить заказ
                        <img width={13} height={12}
                             src={'/react-sneakers/img/arrow.svg'}
                             alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;