function App() {
    return (
        <div className="wrapper">
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
                             src={'/react-sneakers/img/cart.svg'} alt="cart" />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18}
                             src={'/react-sneakers/img/user.svg'} alt="" />
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default App;
