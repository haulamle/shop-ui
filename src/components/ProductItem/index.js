import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img src="https://bizweb.sapocdn.net/100/438/408/products/akm5041-nav-3.jpg?v=1663228610327" alt="" />
            </div>
            <div className={cx('title-price')}>
                <h4>Áo Khoát Gió Nam Trược Nước Thông Minh</h4>
                <span>559.000đ</span>
            </div>
        </div>
    );
}

export default ProductItem;
