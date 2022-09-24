import classNames from 'classnames/bind';
import styles from './CategoryAdmin.module.scss';

const cx = classNames.bind(styles);

function CategoryAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h2>CategoryAdmin</h2>
        </div>
    );
}

export default CategoryAdmin;
