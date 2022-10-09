import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';

import { useCart } from 'react-use-cart';

const cx = classNames.bind(styles);

function Product({ data }) {
    const { addItem } = useCart();
    return (
        <div className={cx('wrapper')}>
            <Link to={`/product-detail/${data.id}`} className={cx('product-img')}>
                <img src={data.url} alt="" />
            </Link>
            <div className={cx('wrapper-content')}>
                <h4 className={cx('title')}>{data.name}</h4>
                <button className={cx('btn-buy')} onClick={() => addItem(data)}>
                    <FontAwesomeIcon fontSize={24} icon={faCartShopping} />
                </button>
            </div>
            <span className={cx('price')}>{data.price}đ</span>
            {data.priceDiscount && <span className={cx('price-discount')}>{data.priceDiscount}đ</span>}
        </div>
    );
}

export default Product;
