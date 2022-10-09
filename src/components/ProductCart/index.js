import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductCart({ data }) {
    const handleAdd = () => {
        if (data.quantity >= data.amount) {
            return;
        } else {
            updateItemQuantity(data.id, data.quantity + 1);
        }
    };
    const { updateItemQuantity, removeItem } = useCart();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img src={data.url} alt={data.url} />
            </div>
            <div className={cx('product-info')}>
                <div className={cx('wrapper-name-btnClear')}>
                    <Link to={`/product-detail/${data.id}`}>{data.name}</Link>
                    <FontAwesomeIcon
                        className={cx('btnClear')}
                        fontSize={16}
                        icon={faTrash}
                        onClick={() => removeItem(data.id)}
                    />
                </div>
                <span className={cx('product-price')}>{data.price}</span>
                <div className={cx('wrap-action')}>
                    <button onClick={() => updateItemQuantity(data.id, data.quantity - 1)}>-</button>
                    <span>{data.quantity}</span>
                    <button onClick={() => handleAdd()}>+</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
