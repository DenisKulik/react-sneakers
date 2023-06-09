import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';

export const API_URL = 'https://641d7c514366dd7def3efa0f.mockapi.io';

export const AppContext = createContext({});

function App() {
    const [ items, setItems ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('');
    const [ cartOpened, setCartOpened ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                const [ responseCartItems, responseItems ] = await Promise.all([
                    axios.get(`${API_URL}/cart`),
                    axios.get(`${API_URL}/items`)
                ]);
                setIsLoading(false);
                setCartItems(responseCartItems.data);
                setItems(responseItems.data);
            } catch (err) {
                throw new Error(err.message);
            }
        })();
    }, []);

    const addToCart = (curItem) => {
        (async () => {
            try {
                const findItem = cartItems.find(
                    (item) => Number(item.parentId) === Number(curItem.id));
                if (findItem) {
                    await axios.delete(`${API_URL}/cart/${findItem.id}`);
                    setCartItems(prev => prev.filter(
                        (item) => Number(item.parentId) !==
                            Number(curItem.id)));
                } else {
                    const { data } = await axios.post(`${API_URL}/cart`,
                        curItem);
                    setCartItems(prev => [ ...prev, data ]);
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
                setCartItems(prev => prev.filter(
                    item => Number(item.id) !== Number(id)));
            } catch (err) {
                throw new Error(err.message);
            }
        })();
    };

    const onChangeSearchInput = (event) => setSearchValue(event.target.value);
    const clearSearchInput = () => setSearchValue('');

    const isAddedItem = (id) => cartItems.some(
        (item) => Number(item.parentId) === Number(id));

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                isAddedItem,
                setCartOpened,
                setCartItems
            }}
        >
            <div className="wrapper">
                <Drawer
                    onClose={() => setCartOpened(false)}
                    onRemove={removeCartItem}
                    cartOpened={cartOpened}
                />
                <Header onOpenCart={() => setCartOpened(true)} />
                <Routes>
                    <Route path="/react-sneakers" exact>
                        <Route index element={
                            <Home
                                items={items}
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
        </AppContext.Provider>);
}

export default App;
