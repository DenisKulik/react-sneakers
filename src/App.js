import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const API_URL = 'https://641d7c514366dd7def3efa0f.mockapi.io';

function App() {
    const [ items, setItems ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('');
    const [ cartOpened, setCartOpened ] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                const responseItems = await axios.get(`${API_URL}/items`);
                const items = await responseItems.data;
                setItems(items);

                const responseCartItems = await axios.get(`${API_URL}/cart`);
                const cartItems = await responseCartItems.data;
                setCartItems(cartItems);
            } catch (err) {
                throw new Error(err.message);
            }
        })();
    }, []);

    const addToCart = (curItem) => {
        (async function () {
            try {
                await axios.post(`${API_URL}/cart`, curItem);
                setCartItems(prev => [ ...prev, curItem ]);
            } catch (err) {
                throw new Error(err.message);
            }
        })();
    };

    const removeCartItem = (id) => {
        (async function () {
            try {
                await axios.delete(`${API_URL}/cart/${id}`);
                setCartItems(prev => prev.filter(item => item.id !== id));
            } catch (err) {
                throw new Error(err.message);
            }
        })();
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
                        onRemove={removeCartItem}
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
