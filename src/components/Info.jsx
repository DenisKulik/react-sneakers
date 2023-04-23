import { useContext } from 'react';
import { AppContext } from '../App';

function Info({ title, image, description }) {
    const { setCartOpened } = useContext(AppContext);
    const onCloseHandler = () => setCartOpened(false);

    return (
        <div className="cartEmpty">
            <img width="120px"
                 src={image}
                 alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onCloseHandler} className="greenBtn">
                <img src={'/react-sneakers/img/arrow.svg'}
                     alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    );
}

export default Info;