import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrappper')}>
            <Link to="/staff" className={cx('title')}>
                Trang Chủ
            </Link>
            <div className={cx('user-admin')}>
                <span>Staff</span>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8JHCKFDU1zVtDiFfs9wg1axdv5QQ89bgaCQvMBVCjQ&s"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;
