import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faGaugeHigh, faSignal, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    const listdata = [
        {
            title: 'Quản Lý User',
            icon: <FontAwesomeIcon fontSize={20} icon={faUser} />,
            to: '/admin-user',
        },
        {
            title: 'Quản Danh Mục',
            icon: <FontAwesomeIcon fontSize={20} icon={faBars} />,
            to: '/admin-category',
        },
        {
            title: 'Quản Sản Phẩm',
            icon: <FontAwesomeIcon fontSize={20} icon={faCodepen} />,
            to: '/admin-product',
        },
        {
            title: 'Quản Hoá Đơn',
            icon: <FontAwesomeIcon fontSize={20} icon={faCartPlus} />,
            to: '/admin-invoice',
        },
        {
            title: 'Thống Kê',
            icon: <FontAwesomeIcon fontSize={20} icon={faSignal} />,
            to: '/admin-statistical',
        },
    ];
    return (
        <div className={cx('wrappper')}>
            <div className={cx('dashboard')}>
                <FontAwesomeIcon fontSize={20} icon={faGaugeHigh} />
                <h1>Dashboard</h1>
            </div>
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
