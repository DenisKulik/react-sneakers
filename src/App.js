import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import { useEffect, useState } from 'react';

const API_URL = 'https://641d7c514366dd7def3efa0f.mockapi.io/items';

function App() {
    const [ items, setItems ] = useState([]);
    const [ cartOpened, setCartOpened ] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(API_URL);
                const items = await response.json();
                setItems(items);
            } catch (err) {
                throw new Error(err.message);
            }
        })();
    }, []);

    return (
        <div className="wrapper">
            {
                cartOpened &&
                <Drawer onClose={() => setCartOpened(false)} />
            }
            <Header onOpenCart={() => setCartOpened(true)} />
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
                    {
                        items.map(
                            (item) => (
                                <Card key={item.id} img={item.img}
                                      title={item.title}
                                      price={item.price}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
