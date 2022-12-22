import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faGaugeHigh, faSignal } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    const listdata = [
        {
            title: 'Quản Danh Mục',
            icon: <FontAwesomeIcon fontSize={20} icon={faBars} />,
            to: '/staff-category',
        },
        {
            title: 'Quản Sản Phẩm',
            icon: <FontAwesomeIcon fontSize={20} icon={faCodepen} />,
            to: '/staff-product',
        },
        {
            title: 'Quản Hoá Đơn',
            icon: <FontAwesomeIcon fontSize={20} icon={faCartPlus} />,
            to: '/staff-invoice',
        },
        {
            title: 'Thống Kê',
            icon: <FontAwesomeIcon fontSize={20} icon={faSignal} />,
            to: '/staff-statistical',
        },
    ];
    return (
        <div className={cx('wrappper')}>
            <Link to="/staff" className={cx('dashboard')}>
                <FontAwesomeIcon fontSize={20} icon={faGaugeHigh} />
                <h1>Dashboard</h1>
            </Link>
            <div className={cx('wrap-event')}>
                {listdata.map((item, index) => (
                    <Link to={item.to} key={index} className={cx('tilte-event')}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className={cx('wrap-btn')}>
                <a href="/" className={cx('btn-logout')} onClick={() => localStorage.removeItem('dataUser')}>
                    Đăng Xuất
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
