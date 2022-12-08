import classNames from 'classnames/bind';
import styles from './Pay.module.scss';
import { useCart } from 'react-use-cart';
import ProductPay from './ProductPay';
import logo from '~/assets/images/logo.jpg';
import { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function Pay() {
    const userCurrent = JSON.parse(localStorage.getItem('dataUser'));
    const navigate = useNavigate();

    const { items, cartTotal, totalUniqueItems } = useCart();
    const [name, setName] = useState(() => {
        return userCurrent.account;
    });
    const [phone, setPhone] = useState(() => {
        return userCurrent.phone;
    });
    const [address, setAddress] = useState(() => {
        return userCurrent.address;
    });
    const [note, setNote] = useState('');

    const handlerPay = async () => {
        const random = Math.floor(Math.random() * 10000);
        try {
            await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}invoice`,
                data: {
                    idHD: random,
                    idUser: userCurrent.userID,
                    status: 'Chờ Duyệt',
                    nameReceiver: name,
                    addressReceiver: address,
                    phoneReceiver: phone,
                    totalItems: totalUniqueItems,
                    name: userCurrent.account,
                    note: note,
                },
            });
            items.forEach((item) => {
                axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}invoicedetail`,
                    data: {
                        idHD: random,
                        idSP: item.id,
                        url: item.url,
                        nameProduct: item.name,
                        amount: item.quantity,
                        price: item.price,
                    },
                });
            });
            localStorage.removeItem('react-use-cart');
            toast.success('Mua Hàng Thành Công !', {
                position: toast.POSITION.TOP_RIGHT,
            });

            const navigationTime = setTimeout(() => {
                navigate('/');
            }, 3000);

            return () => {
                clearTimeout(navigationTime);
            };
        } catch {
            toast.error('Mua Hàng Thất Bại !', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('container-left')}>
                <header className={cx('logo')}>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </header>
                <div className={cx('container-left-main')}>
                    <div className={cx('main-left')}>
                        <h1>Thông tin giao hàng</h1>
                        <div className={cx('group-input')}>
                            <input placeholder="họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={cx('group-input')}>
                            <input
                                placeholder="Số Điện Thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <input placeholder="Địa Chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <textarea placeholder="Ghi chú" value={note} onChange={(e) => setNote(e.target.value)} />
                    </div>
                    <div className={cx('main-right')}>
                        <h1>Vận chuyển</h1>
                        <span>Vui lòng nhập thông tin giao hàng</span>
                        <h1>Thanh toán</h1>
                    </div>
                </div>
                <p>
                    Sau khi hoàn tất đơn hàng khoảng 60-90 phút (trong giờ hành chính), Fashion shop sẽ nhanh chóng gọi
                    điện xác nhận lại thời gian giao hàng với bạn. Fashion shop xin cảm ơn!
                </p>
            </div>
            <div className={cx('container-right')}>
                <h1 className={cx('title-cart')}>Đơn hàng ({totalUniqueItems} sản phẩm)</h1>
                {/* {ProductCheckOut} */}
                {items.map((item, index) => (
                    <ProductPay key={index} data={item} />
                ))}
                <div className={cx('total-line')}>
                    <span>Tổng cộng</span>
                    <span>{cartTotal}.000 đ</span>
                </div>
                <div className={cx('btn-action')}>
                    <a href="/cart" className={cx('link-back')}>
                        Quay về giỏ hàng
                    </a>
                    <button className={cx('btn-checkout')} onClick={handlerPay}>
                        Đặt Hàng
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Pay;
