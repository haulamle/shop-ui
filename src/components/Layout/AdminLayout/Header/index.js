import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrappper')}>
            <Link to="/admin" className={cx('title')}>
                Trang Chủ
            </Link>
            <div className={cx('user-admin')}>
                <span>Admin</span>
                <img
                    src="http://trainghiemkhachhang.net/wp-content/themes/gorgo/assets/images/avatars/user-avatar.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;
