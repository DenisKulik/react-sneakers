import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

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
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
