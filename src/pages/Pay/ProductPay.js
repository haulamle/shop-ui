import classNames from 'classnames/bind';
import styles from './Pay.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductPay({ data }) {
    return (
        <>
            <div className={cx('product-detail')}>
                <Link to={`/product-detail/${data.id}`}>
                    <img src={data.url} alt="" />
                </Link>
                <span className={cx('quantity')}>{data.quantity}</span>
                <div className={cx('title-product')}>
                    <span>{data.name}</span>
                </div>
            </div>
            <div className={cx('total-line')}>
                <span>Tạm tính</span>
                <span>
                    {data.price} x {data.quantity}
                </span>
            </div>
        </>
    );
}

export default ProductPay;
