function App() {
    return (
        <div className="wrapper">
            <div className="overlay">
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

            <header className="header">
                <div className="headerLeft">
                    <img width={40} height={40}
                         src={'/react-sneakers/img/logo.png'}
                         alt="Logotype" />
                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className="headerRight">
                    <li>
                        <img width={18} height={18}
                             src={'/react-sneakers/img/cart.svg'} alt="Cart" />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18}
                             src={'/react-sneakers/img/user.svg'} alt="User" />
                    </li>
                </ul>
            </header>

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
                    <div className="card">
                        <div className="favorite">
                            <img src={'/react-sneakers/img/unliked.svg'}
                                 alt="Unliked" />
                        </div>
                        <img className="cardImage" width={133}
                             src={'/react-sneakers/img/sneakers/1.jpg'}
                             alt="Nike Blazer Mid Suede" />
                        <h5 className="cardHeading">Мужские Кроссовки Nike
                            Blazer
                            Mid Suede</h5>
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

                    <div className="card">
                        <img className="cardImage" width={133}
                             src={'/react-sneakers/img/sneakers/2.jpg'}
                             alt="Nike Air Max 270" />
                        <h5 className="cardHeading">Мужские Кроссовки Nike Air
                            Max
                            270</h5>
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

                    <div className="card">
                        <img className="cardImage" width={133}
                             src={'/react-sneakers/img/sneakers/3.jpg'}
                             alt="Nike Blazer Mid Suede" />
                        <h5 className="cardHeading">Мужские Кроссовки Nike
                            Blazer
                            Mid Suede</h5>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>8 499 руб.</b>
                            </div>
                            <button className="cardBtn">
                                <img src={'/react-sneakers/img/btn-plus.svg'}
                                     alt="Add to cart" />
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="cardImage" width={133}
                             src={'/react-sneakers/img/sneakers/4.jpg'}
                             alt="Puma X Aka Boku Future Rider" />
                        <h5 className="cardHeading">Кроссовки Puma X Aka Boku
                            Future
                            Rider</h5>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>8 999 руб.</b>
                            </div>
                            <button className="cardBtn">
                                <img src={'/react-sneakers/img/btn-plus.svg'}
                                     alt="Add to cart" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
