import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';
import { API_URL } from '../../App';
import styles from './Drawer.module.scss';
import Info from '../Info';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, cartOpened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [ isOrderCompleted, setIsOrderCompleted ] = useState(false);

    const onClickOrderHandler = async () => {
        try {
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                await axios.delete(`${API_URL}/cart/${i + 1}`);
                await delay(1000);
            }
        } catch (e) {
            alert(`${e.message()}. Ошибка при создании заказа :(`);
        }
    };

    return (
        <div className={`${styles.overlay} ${
            cartOpened ? styles.isVisible : ''}`}>
            <div className={styles.drawer}>
                <h2>
                    Корзина
                    <img
                        onClick={onClose}
                        className={styles.closeBtn}
                        src={'/react-sneakers/img/btn-remove.svg'}
                        alt="Close"
                    />
                </h2>

                {cartItems.length > 0 ? (<>
                        <div className={styles.items}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div
                                        style={{ backgroundImage: `url(${item.img})` }}
                                        className={styles.cartItemImg}
                                    >
                                    </div>
                                    <div className={styles.cartItemInner}>
                                        <p>{item.title}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(item.id)}
                                        className={styles.removeBtn}
                                        src={'/react-sneakers/img/btn-remove.svg'}
                                        alt="Remove"
                                    />
                                </div>))}
                        </div>

                        <div className={styles.cartTotal}>
                            <ul>
                                <li className={styles.cartTotalItem}>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li className={styles.cartTotalItem}>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{Math.round(totalPrice * 0.05)} руб.</b>
                                </li>
                            </ul>

                            <button
                                onClick={onClickOrderHandler}
                                className="greenBtn"
                            >
                                Оформить заказ
                                <img width={13} height={12}
                                     src={'/react-sneakers/img/arrow.svg'}
                                     alt="Arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={isOrderCompleted ? 'Заказ оформлен!' :
                            'Корзина пустая'}
                        description={isOrderCompleted ?
                            'Ваш заказ #1 скоро будет передан курьерской доставке' :
                            'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                        image={isOrderCompleted ?
                            '/react-sneakers/img/complete-order.jpg' :
                            '/react-sneakers/img/empty-cart.jpg'} />)}
            </div>
        </div>);
}

export default Drawer;