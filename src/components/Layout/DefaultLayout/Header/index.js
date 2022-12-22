import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import logo from '~/assets/images/logo.png';

import styles from './Header.module.scss';
import {
    faArrowRightFromBracket,
    faBolt,
    faChevronDown,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import Search from './Search';
import CartHeader from './CartHeader';

const cx = classNames.bind(styles);

function Header() {
    const userCurrent = JSON.parse(localStorage.getItem('dataUser'));
    const actionList = [
        {
            title: 'Đơn Hàng Của Tôi',
            href: '/myoder',
        },
        {
            title: 'Đổi Mật Khẩu',
            href: '/',
        },
        {
            title: 'Số Địa chỉ',
            href: '/',
        },
    ];
    const category = [];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('inner-top')}>
                    <div className={cx('introduce')}>
                        <ul>
                            <li>
                                <a className={cx('introduce-link')} href="/">
                                    <FontAwesomeIcon
                                        className={cx('introduce-icon')}
                                        fontSize={16}
                                        icon={faLocationDot}
                                    />
                                    Tìm
                                    <b>180+</b>
                                    cửa hàng
                                </a>
                            </li>
                            <li>
                                <a className={cx('introduce-link')} href="/">
                                    <FontAwesomeIcon className={cx('introduce-icon')} fontSize={16} icon={faPhone} />
                                    <b>1800 2086</b>
                                    <span>FREE</span>
                                </a>
                            </li>
                            <li>
                                <a className={cx('introduce-link')} href="/">
                                    <FontAwesomeIcon
                                        color="#fcaf17"
                                        className={cx('introduce-icon')}
                                        fontSize={16}
                                        icon={faBolt}
                                    />
                                    <b>Miễn Phí Đổi Trả 15 ngày</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* search and login  */}
                    <div className={cx('search-action')}>
                        {/* search */}
                        <Search />
                        {/* login */}
                        <div className={cx('action')}>
                            {userCurrent ? (
                                <>
                                    <Tippy
                                        interactive
                                        placement={'top-end'}
                                        render={(attrs) => (
                                            <div className={cx('list-user')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper>
                                                    <div className={cx('wrap-list')}>
                                                        <span>{userCurrent.account}</span>
                                                        {actionList.map((data, index) => {
                                                            return (
                                                                <Link
                                                                    to={data.href}
                                                                    key={index}
                                                                    className={cx('action-user')}
                                                                >
                                                                    {data.title}
                                                                </Link>
                                                            );
                                                        })}
                                                        <a
                                                            className={cx('btn-logout')}
                                                            onClick={() => {
                                                                localStorage.removeItem('dataUser');
                                                                localStorage.removeItem('react-use-cart');
                                                            }}
                                                            href="/"
                                                        >
                                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                            Đăng Xuất
                                                        </a>
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('user-login')}>
                                            <FontAwesomeIcon icon={faUser} />
                                            <FontAwesomeIcon fontSize={12} icon={faChevronDown} />
                                        </div>
                                    </Tippy>
                                </>
                            ) : (
                                <>
                                    <Link className={cx('btn-action')} to="/register">
                                        Đăng Ký
                                    </Link>
                                    <Link className={cx('btn-action')} to="/login">
                                        Đăng Nhập
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('inner-bottom')}>
                    <div className={cx('logo-category')}>
                        <a href="/" className={cx('logo')}>
                            <img className={cx('logo-img')} src={logo} alt="" />
                        </a>
                        <ul>
                            {category.map((data, index) => (
                                <li key={index}>
                                    <Link className={cx('category-link')} to="/">
                                        {data}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <CartHeader />
                </div>
            </div>
        </header>
    );
}

export default Header;
