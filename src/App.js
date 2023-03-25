import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';

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
            <Routes>
                <Route path="/react-sneakers" exact>
                    <Route index element={<Home items={items}
                                                searchValue={searchValue}
                                                setSearchValue={setSearchValue}
                                                onChangeSearchInput={onChangeSearchInput}
                                                clearSearchInput={clearSearchInput}
                                                addToCart={addToCart} />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
