import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import { useEffect, useState } from 'react';

const API_URL = 'https://641d7c514366dd7def3efa0f.mockapi.io/items';

function App() {
    const [ items, setItems ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('');
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

    const addToCart = (curItem) => {
        const curItemIdx = cartItems.findIndex(
            (item) => JSON.stringify(item) === JSON.stringify(curItem));

        curItemIdx === -1 ? setCartItems(prev => [ ...prev, curItem ]) :
            setCartItems(
                prev => [ ...prev ].filter((_, idx) => idx !== curItemIdx));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const clearSearchInput = () => setSearchValue('');

    return (
        <div className="wrapper">
            {
                cartOpened &&
                <Drawer onClose={() => setCartOpened(false)}
                        items={cartItems} />
            }
            <Header onOpenCart={() => setCartOpened(true)} />
            <div className="content">
                <div className="innerContent">
                    <h1>{searchValue ? `Поиск по запросу: «${searchValue}»` :
                        'Все кроссовки'}</h1>

                    <div className="search">
                        <img width={18} height={18}
                             src={'/react-sneakers/img/search.svg'}
                             alt="Search" />
                        {searchValue && <img onClick={clearSearchInput}
                                             className="clearBtn"
                                             src={'/react-sneakers/img/btn-remove.svg'}
                                             alt="Clear" />}
                        <input onChange={onChangeSearchInput}
                               value={searchValue} type="text"
                               placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    {
                        items.filter(item => item.title.toLowerCase().includes(
                            searchValue.trim().toLowerCase()))
                             .map(
                                 (item) => (
                                     <Card key={item.id} img={item.img}
                                           title={item.title}
                                           price={item.price}
                                           onClickAddToCart={(product) => addToCart(
                                               product)}
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
