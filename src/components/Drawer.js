function Drawer({ onClose, onRemove, items = [] }) {
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

                {
                    items.length > 0 ?
                        (
                            <>
                                <div className="items">
                                    {
                                        items.map((item) => (
                                            <div key={item.id}
                                                 className="cartItem">
                                                <div
                                                    style={{ backgroundImage: `url(${item.img})` }}
                                                    className="cartItemImg">

                                                </div>
                                                <div className="cartItemInner">
                                                    <p>{item.title}</p>
                                                    <b>{item.price} руб.</b>
                                                </div>
                                                <img onClick={() => onRemove(
                                                    item.id)}
                                                     className="removeBtn"
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
                            </>
                        )
                        :
                        (
                            <div
                                className="cartEmpty">
                                <img width="120px" height="120px"
                                     src={'/react-sneakers/img/empty-cart.jpg'}
                                     alt="Empty" />
                                <h2>Корзина пустая</h2>
                                <p>
                                    Добавьте хотя бы одну пару кроссовок, чтобы
                                    сделать
                                    заказ.
                                </p>
                                <button onClick={onClose} className="greenBtn">
                                    <img src={'/react-sneakers/img/arrow.svg'}
                                         alt="Arrow" />
                                    Вернуться назад
                                </button>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default Drawer;