import classNames from 'classnames/bind';
import styles from './ProductCartPay.module.scss';
import { useCart } from 'react-use-cart';
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
            <a className={cx('wrapper-img')} href="abc">
                <img src={data.url} alt="" />
            </a>
            <div className={cx('wrapper-name')}>
                <a href="abc">{data.name}</a>
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
