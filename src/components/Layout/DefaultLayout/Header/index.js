import { useEffect, useState } from 'react';
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
    faMagnifyingGlass,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

import ProductItem from '~/components/ProductItem';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const actionList = [
        {
            title: 'tài khoản của tôi',
        },
        {
            title: 'Đổi Mật Khẩu',
        },
        {
            title: 'Số Địa chỉ',
        },
    ];
    const user = false;

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

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
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <a href="abc">Xem tất cả (322)</a>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Cần tìm áo Khoác, áo polo..." spellCheck={false} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    {/* login */}
                    <div className={cx('action')}>
                        {user ? (
                            <>
                                <Tippy
                                    interactive
                                    render={(attrs) => (
                                        <div className={cx('list-user')} tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                <div className={cx('wrap-list')}>
                                                    <span>Hậu Lâmle</span>
                                                    {actionList.map((data, index) => {
                                                        return (
                                                            <div key={index} className={cx('action-user')}>
                                                                {data.title}
                                                            </div>
                                                        );
                                                    })}
                                                    <Link className={cx('btn-logout')} to="/logout">
                                                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                        Đăng Xuất
                                                    </Link>
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
                            <a className={cx('category-link')} href="abc">
                                MUA 2 TẶNG 1
                            </a>
                        </li>
                        <li>
                            <a className={cx('category-link')} href="abc">
                                NỮ
                            </a>
                        </li>
                        <li>
                            <a className={cx('category-link')} href="abc">
                                NAM
                            </a>
                        </li>
                        <li>
                            <a className={cx('category-link')} href="abc">
                                TRẺ EM
                            </a>
                        </li>
                        <li>
                            <a className={cx('category-link')} href="abc">
                                BỘ SƯU TẬP
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="/cart" className={cx('cart')}>
                    <FontAwesomeIcon fontSize={24} icon={faBagShopping} />
                    <span>Giỏ Hàng</span>
                </a>
            </div>
        </header>
    );
}

export default Header;
