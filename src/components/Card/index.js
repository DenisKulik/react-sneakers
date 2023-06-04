import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import { AppContext } from '../../App';

function Card(props) {
    const {
        id,
        img,
        title,
        price,
        onClickAddToCart,
        isLoading = false
    } = props;
    const { isAddedItem } = useContext(AppContext);
    const [ isFavorite, setIsFavorite ] = useState(false);

    const handleClickAddToCart = () => {
        onClickAddToCart({ id, parentId: id, img, title, price });
    };

    const onClickFavorite = () => setIsFavorite(!isFavorite);

    return (
        <div className={styles.card}>
            {isLoading ? (
                    <ContentLoader
                        speed={2}
                        width={133}
                        height={223}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="1" y="0" rx="10" ry="10" width="155"
                              height="155" />
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                        <rect x="124" y="230" rx="10" ry="10" width="32"
                              height="32" />
                    </ContentLoader>
                ) :
                (<>
                        <div className={styles.favorite}>
                            <img onClick={onClickFavorite}
                                 src={`/react-sneakers/img/${isFavorite ?
                                     'liked' :
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
                                 src={`/react-sneakers/img/btn-${
                                     isAddedItem(id) ?
                                         'checked' :
                                         'plus'}.svg`}
                                 alt="Add to cart" />
                        </div>
                    </>

                )
            }
        </div>
    );
}

export default Card;