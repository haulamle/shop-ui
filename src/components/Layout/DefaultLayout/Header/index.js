import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import {
    faArrowRightFromBracket,
    faBagShopping,
    faBolt,
    faChevronDown,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import Search from './Search';

const cx = classNames.bind(styles);

function Header() {
    const userCurrent = JSON.parse(localStorage.getItem('dataUser'));
    const actionList = [
        {
            title: 'tài khoản của tôi',
            href: '/account',
        },
        {
            title: 'Đổi Mật Khẩu',
            href: '/account',
        },
        {
            title: 'Số Địa chỉ',
            href: '/account',
        },
    ];
    const productFemale = [
        {
            trouser: 'Quần Jean Nữ',
            shirt: 'Áo Thun Nữ',
        },
        {
            trouser: 'Quần Âu Nữ',
            shirt: 'Áo Thun Hoạ Tiết',
        },
        {
            trouser: 'Quần Kaki Nữ',
            shirt: 'Áo Polo Nữ',
        },
        {
            trouser: 'Quần Short Nữ',
            shirt: 'Áo Sơ Mi Nữ',
        },
        {
            trouser: null,
            shirt: 'Áo Khoát Nữ',
        },
        {
            trouser: null,
            shirt: 'Áo Len Nữ',
        },
    ];

    const productMale = [
        {
            trouser: 'Quần Jean nam',
            shirt: 'Áo Ba Lỗ nam',
        },
        {
            trouser: 'Quần Âu nam',
            shirt: 'Áo Vest',
        },
        {
            trouser: 'Quần Kaki nam',
            shirt: 'Áo Polo nam',
        },
        {
            trouser: 'Quần Short nam',
            shirt: 'Áo Sơ Mi nam',
        },
        {
            trouser: null,
            shirt: 'Áo Khoát nam',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-top')}>
                <div className={cx('introduce')}>
                    <ul>
                        <li>
                            <a className={cx('introduce-link')} href="abc">
                                <FontAwesomeIcon className={cx('introduce-icon')} fontSize={16} icon={faLocationDot} />
                                Tìm
                                <b>180+</b>
                                cửa hàng
                            </a>
                        </li>
                        <li>
                            <a className={cx('introduce-link')} href="abc">
                                <FontAwesomeIcon className={cx('introduce-icon')} fontSize={16} icon={faPhone} />
                                <b>1800 2086</b>
                                <span>FREE</span>
                            </a>
                        </li>
                        <li>
                            <a className={cx('introduce-link')} href="abc">
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
                                                        onClick={() => localStorage.removeItem('dataUser')}
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
                    <Link to="/" className={cx('logo')}>
                        <img
                            className={cx('logo-img')}
                            src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/logo.svg?1663239091239"
                            alt=""
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link className={cx('category-link')} to="/">
                                MUA 2 TẶNG 1
                            </Link>
                        </li>
                        <Tippy
                            interactive
                            placement="top-start"
                            render={(attrs) => (
                                <div className={cx('list-category')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div className={cx('container-category')}>
                                            <div className={cx('box-category')}>
                                                <h1 className={cx('name-category')}>ÁO</h1>
                                                <ul>
                                                    {productFemale.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <a className={cx('product-category')} href="abc">
                                                                    {item.shirt}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={cx('box-category')}>
                                                <h1 className={cx('name-category')}>QUẦN</h1>
                                                <ul>
                                                    {productFemale.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <a className={cx('product-category')} href="abc">
                                                                    {item.trouser}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={cx('box-category')}></div>
                                            <div className={cx('box-category')}></div>
                                            <div className={cx('box-category')}>
                                                <div className={cx('category-img')}>
                                                    <img
                                                        src="https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/863105/assets/link_image_2_1.jpg?1663298001005"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <li>
                                <Link className={cx('category-link')} to="/">
                                    NỮ
                                </Link>
                            </li>
                        </Tippy>
                        <Tippy
                            interactive
                            placement="top-start"
                            render={(attrs) => (
                                <div className={cx('list-category')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div className={cx('container-category')}>
                                            <div className={cx('box-category')}>
                                                <h1 className={cx('name-category')}>ÁO</h1>
                                                <ul>
                                                    {productMale.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <a className={cx('product-category')} href="abc">
                                                                    {item.shirt}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={cx('box-category')}>
                                                <h1 className={cx('name-category')}>QUẦN</h1>
                                                <ul>
                                                    {productMale.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <a className={cx('product-category')} href="abc">
                                                                    {item.trouser}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={cx('box-category')}>
                                                <h1 className={cx('name-category')}>QUẦN MẶC TRONG</h1>
                                                <ul>
                                                    <li>
                                                        <a className={cx('product-category')} href="abc">
                                                            Áo Thun
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className={cx('product-category')} href="abc">
                                                            Áo Thun
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className={cx('product-category')} href="abc">
                                                            Áo Thun
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('box-category')}></div>
                                            <div className={cx('box-category')}>
                                                <div className={cx('category-img')}>
                                                    <img
                                                        src="https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/863105/assets/link_image_3_1.jpg?1663298001005"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <li>
                                <Link className={cx('category-link')} to="/">
                                    NAM
                                </Link>
                            </li>
                        </Tippy>
                        <li>
                            <Link className={cx('category-link')} to="/">
                                TRẺ EM
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('category-link')} to="/">
                                BỘ SƯU TẬP
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/cart" className={cx('cart')}>
                    <FontAwesomeIcon fontSize={24} icon={faBagShopping} />
                    <span>Giỏ Hàng</span>
                </Link>
            </div>
        </header>
    );
}

export default Header;
