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
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                const responseCartItems = await axios.get(`${API_URL}/cart`);
                const responseItems = await axios.get(`${API_URL}/items`);

                setIsLoading(false);

                setCartItems(responseCartItems.data);
                setItems(responseItems.data);
            } catch (err) {
                throw new Error(err.message);
            }
        })();
    }, []);

    const addToCart = (curItem) => {
        (async function () {
            try {
                console.log(cartItems);
                if (cartItems.find(
                    (item) => Number(item.id) === Number(curItem.id))) {
                    await axios.delete(`${API_URL}/cart/${curItem.id}`);
                    setCartItems(
                        prev => prev.filter(
                            (item) => Number(item.id) !== Number(curItem.id)));
                } else {
                    await axios.post(`${API_URL}/cart`, curItem);
                    setCartItems(prev => [ ...prev, curItem ]);
                }
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
                    <Route index element={
                        <Home items={items}
                              cartItems={cartItems}
                              searchValue={searchValue}
                              setSearchValue={setSearchValue}
                              onChangeSearchInput={onChangeSearchInput}
                              clearSearchInput={clearSearchInput}
                              addToCart={addToCart}
                              isLoading={isLoading}
                        />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
