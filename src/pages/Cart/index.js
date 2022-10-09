import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import ProductCartPay from '~/components/ProductCartPay';
import styles from './Cart.module.scss';

import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import Product from '~/components/Product';
import axios from 'axios';

const cx = classNames.bind(styles);
function Cart() {
    const [dataProduct, setDataProduct] = useState([]);
    const { items, isEmpty, totalUniqueItems, cartTotal } = useCart();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/product/catogory/1`, {
                params: {
                    limit: 20,
                },
            })
            .then(function (response) {
                setDataProduct(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className={cx('wrapper')}>
                {isEmpty ? (
                    <div className={cx('wrapper-cart-empty')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/878697/assets/blank_cart.svg?1665305647016"
                            alt=""
                        />
                        <p>Giỏ Hàng Của Bạn Trống</p>
                        <Link className={cx('btn-login')} to="/login">
                            Đăng Nhập Để Mua Hàng
                        </Link>
                        <span>
                            <Link className={cx('btn-buy-now')} to="/home">
                                Mua Ngay
                            </Link>
                        </span>
                    </div>
                ) : (
                    <>
                        <div className={cx('left-cart')}>
                            <div className={cx('wrap-cart-total')}>
                                <p>Giỏ hàng</p>
                                <span>({totalUniqueItems}) Sản phẩm</span>
                            </div>
                            <div className={cx('wrap-title')}>
                                <span>Sản phẩm</span>
                                <span>Đơn giá</span>
                                <span>Số lượng</span>
                            </div>
                            <div className={cx('wrapper-product')}>
                                {items.map((item, index) => (
                                    <ProductCartPay key={index} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('right-cart')}>
                            <div className={cx('pay-product')}>
                                <div className={cx('wrap-price-total')}>
                                    <p>Tổng đơn hàng (Tạm tính) :</p>
                                    <span>{cartTotal}.000 đ</span>
                                </div>
                                <button className={cx('btn-pay')}>Thanh Toán ({totalUniqueItems})</button>
                            </div>
                            <div className={cx('wrapper-helt')}>
                                <span>
                                    Yên tâm thanh toán! Nhân viên tư vấn YODY sẽ gọi điện ngay để hỗ trợ bạn hoàn tiền
                                    giảm giá
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <h1 className={cx('suggestions')}>CÓ THỂ BẠN MUỐN MUA</h1>
            <div className={cx('wrapper-product')}>
                {dataProduct.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </>
    );
}

export default Cart;
