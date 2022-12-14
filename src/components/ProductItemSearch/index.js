import classNames from 'classnames/bind';
import styles from './ProductItemSearch.module.scss';

const cx = classNames.bind(styles);
function ProductItemSearch({ data }) {
    return (
        <a href={`/product-detail/${data.id}`} className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img src={data.url} alt="" />
            </div>
            <div className={cx('title-price')}>
                <h4>{data.name}</h4>
                <span>{data.price}đ</span>
            </div>
        </a>
    );
}

export default ProductItemSearch;
