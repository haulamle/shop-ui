import classNames from 'classnames/bind';
import styles from './ProductCartPay.module.scss';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function ProductCartPay({ data }) {
    const { updateItemQuantity, removeItem } = useCart();
    const handleAdd = () => {
        if (data.quantity >= data.amount) {
            return;
        } else {
            updateItemQuantity(data.id, data.quantity + 1);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('wrapper-img')} to={`/product-detail/${data.id}`}>
                <img src={data.url} alt="" />
            </Link>
            <div className={cx('wrapper-name')}>
                <Link to={`/product-detail/${data.id}`}>{data.name}</Link>
            </div>
            <div className={cx('wrapper-price')}>
                <span>{data.price}đ</span>
            </div>
            <div className={cx('wrapper-action')}>
                <button onClick={() => updateItemQuantity(data.id, data.quantity - 1)}>-</button>
                <span>{data.quantity}</span>
                <button onClick={() => handleAdd()}>+</button>
            </div>
            <div className={cx('btn-clear')} onClick={() => removeItem(data.id)}>
                <button></button>
            </div>
        </div>
    );
}

export default ProductCartPay;
