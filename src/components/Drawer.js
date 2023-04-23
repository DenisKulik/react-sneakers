import Info from './Info';
import { useContext, useState } from 'react';
import { API_URL, AppContext } from '../App';
import axios from 'axios';

function Drawer({ onClose, onRemove, cartItems = [] }) {
    const { setCartItems } = useContext(AppContext);
    const [ isOrderCompleted, setIsOrderCompleted ] = useState(false);

    const onClickOrderHandler = async () => {
        try {
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                await axios.delete(`${API_URL}/cart/${i + 1}`);
            }
        } catch (e) {
            alert(`${e.message()}. Ошибка при создании заказа :(`);
        }
    };

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
                    cartItems.length > 0 ?
                        (
                            <>
                                <div className="items">
                                    {
                                        cartItems.map((item) => (
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

                                    <button onClick={onClickOrderHandler}
                                            className="greenBtn">
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
                            <Info
                                title={isOrderCompleted ? 'Заказ оформлен!' :
                                    'Корзина пустая'}
                                description={isOrderCompleted ?
                                    'Ваш заказ #1 скоро будет передан курьерской доставке' :
                                    'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                                image={isOrderCompleted ?
                                    '/react-sneakers/img/complete-order.jpg' :
                                    '/react-sneakers/img/empty-cart.jpg'} />
                        )
                }
            </div>
        </div>
    );
}

export default Drawer;