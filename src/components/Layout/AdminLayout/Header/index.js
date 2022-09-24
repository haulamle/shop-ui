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
                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/307735789_153294564055044_7737978689313326312_n.jpg?stp=cp6_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YNg4_6AxoggAX_uwDCj&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-CnZx6wuAMLfL20nyyQo2COfZMTmoRkSyxqG0w0MrqFw&oe=63336841"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;
