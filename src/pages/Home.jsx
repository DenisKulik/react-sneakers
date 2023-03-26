import Card from '../components/Card';

function Home(props) {
    const {
        items,
        cartItems,
        searchValue,
        onChangeSearchInput,
        clearSearchInput,
        addToCart
    } = props;
    return (
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
                                 <Card key={item.id}
                                       id={item.id}
                                       img={item.img}
                                       title={item.title}
                                       price={item.price}
                                       onClickAddToCart={(product) => addToCart(
                                           product)}
                                       addedToCart={cartItems.some(
                                           (product) => Number(product.id) ===
                                               Number(item.id))}
                                 />
                             )
                         )
                }
            </div>
        </div>
    );
}

export default Home;