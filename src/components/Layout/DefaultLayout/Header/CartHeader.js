import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import ProductCart from '~/components/ProductCart';
import { useCart } from 'react-use-cart';

const cx = classNames.bind(styles);

function CartHeader() {
    const navigate = useNavigate();

    const { items, isEmpty, totalUniqueItems, cartTotal } = useCart();
    return (
        <>
            <Tippy
                zIndex={999}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('cart-wrapper')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {isEmpty ? (
                                <div className={cx('wrap-cart-empty')}>
                                    <img
                                        src="https://bizweb.dktcdn.net/100/438/408/themes/878697/assets/blank_cart.svg?1665216380290"
                                        alt=""
                                    />
                                    <p>Giỏ hàng của bạn trống</p>
                                    <a href="/login">Đăng nhập</a>
                                </div>
                            ) : (
                                <>
                                    <div className={cx('wrap-product-cart')}>
                                        {items.map((item, index) => (
                                            <ProductCart key={index} data={item} />
                                        ))}
                                    </div>
                                    <div className={cx('wrap-action-cart')}>
                                        <div className={cx('wrap-title-price')}>
                                            Tổng Cộng:{' '}
                                            <span className={cx('product-cart-price')}>{cartTotal}.000đ</span>
                                        </div>
                                        <button className={cx('btn-show-cart')} onClick={() => navigate('/cart')}>
                                            Xem Giỏ Hàng
                                        </button>
                                    </div>
                                </>
                            )}
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to="/cart" className={cx('cart')}>
                    <FontAwesomeIcon fontSize={24} icon={faBagShopping} />
                    <span>Giỏ Hàng</span>
                    {isEmpty ? <></> : <div className={cx('notification-cart')}>{totalUniqueItems}</div>}
                </Link>
            </Tippy>
        </>
    );
}

export default CartHeader;
