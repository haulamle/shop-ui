import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function ProductItem({ data }) {
    return (
        <Link to={`/product-detail/${data.idSP}`} className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img src={data.image} alt="" />
            </div>
            <div className={cx('title-price')}>
                <h4>{data.name}</h4>
                <span>{data.price}đ</span>
            </div>
        </Link>
    );
}

export default ProductItem;
