import Header from './components/Header';
import Card from './components/Card';

function App() {
    return (
        <div className="wrapper">
            <div style={{ display: 'none' }} className="overlay">
                <div className="drawer">
                    <h2>
                        Корзина
                        <img className="closeBtn"
                             src={'/react-sneakers/img/btn-remove.svg'}
                             alt="Close" />
                    </h2>

                    <div className="items">
                        <div className="cartItem">
                            <div
                                style={{ backgroundImage: 'url(/react-sneakers/img/sneakers/2.jpg)' }}
                                className="cartItemImg">

                            </div>
                            <div className="cartItemInner">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeBtn"
                                 src={'/react-sneakers/img/btn-remove.svg'}
                                 alt="Remove" />
                        </div>

                        <div className="cartItem">
                            <div
                                style={{ backgroundImage: 'url(/react-sneakers/img/sneakers/4.jpg)' }}
                                className="cartItemImg">

                            </div>
                            <div className="cartItemInner">
                                <p>Кроссовки Puma X Aka Boku Future Rider</p>
                                <b>8 999 руб.</b>
                            </div>
                            <img className="removeBtn"
                                 src={'/react-sneakers/img/btn-remove.svg'}
                                 alt="Remove" />
                        </div>
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
            <Header />
            <div className="content">
                <div className="innerContent">
                    <h1>Все кроссовки</h1>

                    <div className="search">
                        <img width={18} height={18}
                             src={'/react-sneakers/img/search.svg'}
                             alt="Search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
