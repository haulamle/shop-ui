import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);

function Product({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/product-detail/${data.idSP}`} className={cx('product-img')}>
                <img src={data.image} alt="" />
            </Link>
            <div className={cx('wrapper-content')}>
                <h4 className={cx('title')}>{data.name}</h4>
                <button className={cx('btn-buy')}>Mua</button>
            </div>
            <span className={cx('price')}>{data.price}đ</span>
            {data.priceDiscount && <span className={cx('price-discount')}>{data.priceDiscount}đ</span>}
        </div>
    );
}

export default Product;
