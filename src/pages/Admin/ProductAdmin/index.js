import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';

const cx = classNames.bind(styles);

function ProductAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h2>ProductAdmin</h2>
        </div>
    );
}

export default ProductAdmin;
