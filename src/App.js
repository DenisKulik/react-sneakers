import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const sneakers = [
    {
        id: 1,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        img: '/react-sneakers/img/sneakers/1.jpg',
        price: 12_999,
    },
    {
        id: 2,
        title: 'Мужские Кроссовки Nike Air Max 270',
        img: '/react-sneakers/img/sneakers/2.jpg',
        price: 15_699,
    },
    {
        id: 3,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        img: '/react-sneakers/img/sneakers/3.jpg',
        price: 8_499,
    },
    {
        id: 4,
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        img: '/react-sneakers/img/sneakers/4.jpg',
        price: 8_999,
    }
];

function App() {
    return (
        <div className="wrapper">
            <Drawer />
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
                    {
                        sneakers.map(
                            (item) => (
                                <Card key={item.id} img={item.img}
                                      title={item.title}
                                      price={item.price} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
