import styles from './Card.module.scss';
import { useState } from 'react';

function Card(props) {
    const { img, title, price, onClickAddToCart } = props;
    const [ isAdded, setIsAdded ] = useState(false);
    const [ isFavorite, setIsFavorite ] = useState(false);

    const handleClickAddToCart = () => {
        onClickAddToCart({ img, title, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => setIsFavorite(!isFavorite);

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickFavorite}
                     src={`/react-sneakers/img/${isFavorite ? 'liked' :
                         'unliked'}.svg`}
                     alt="Unliked" />
            </div>
            <img className={styles.cardImage} width={133}
                 src={img}
                 alt={title} />
            <h5 className={styles.cardHeading}>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardPrice}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={handleClickAddToCart}
                     className={styles.addToCartBtn}
                     src={`/react-sneakers/img/btn-${isAdded ? 'checked' :
                         'plus'}.svg`}
                     alt="Add to cart" />
            </div>
        </div>
    );
}

export default Card;