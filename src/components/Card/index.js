import styles from './Card.module.scss';

function Card(props) {
    const { img, title, price } = props;

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={'/react-sneakers/img/unliked.svg'}
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
                <button className={styles.cardBtn}>
                    <img src={'/react-sneakers/img/btn-plus.svg'}
                         alt="Add to cart" />
                </button>
            </div>
        </div>
    );
}

export default Card;