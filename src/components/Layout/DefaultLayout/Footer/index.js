import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('wrapper')}>
                <div className={cx('evaluate')}>
                    <p>
                        “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ
                        mệnh, là triết lý, chiến lược.. luôn cùng Fashion Shop tiến bước”
                    </p>

                    <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                </div>
                <div className={cx('about-shop')}>
                    <h2>VỀ Fashion</h2>
                    <ul>
                        <li>
                            <a href="abc">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="abc">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('help-client')}>
                    <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                    <ul>
                        <li>
                            <a href="abc">Hướng dẫn chọn size</a>
                        </li>
                        <li>
                            <a href="abc">Chính sách khách hàng</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('contact')}>
                    <div className={cx('wrap-contact')}>
                        <img
                            src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/map.svg?1663439174633"
                            alt=""
                        />
                        <p>
                            Công ty cổ phần Thời trang Fashion Shop <br></br> Mã số thuế: 0801206940 <br></br>Địa chỉ:
                            Đường Thanh Tân - Thanh Khê - Thành phố Đà<br></br>Nẵng - Đà Nẵng
                        </p>
                    </div>
                    <div className={cx('wrap-contact')}>
                        <img
                            src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/icon_address.png?1663439174633"
                            alt=""
                        />
                        <p>
                            <a href="abc">Tìm cửa hàng gần bạn nhất</a>
                        </p>
                    </div>
                    <div className={cx('wrap-contact')}>
                        <img
                            src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/phone.svg?1663439174633"
                            alt=""
                        />
                        <p>
                            <a href="abc">Liên hệ đặt hàng: 0384 288 343</a>
                            <a href="abc"> Thắc mắc đơn hàng: 0384 288 343</a>
                            <a href="abc"> Góp ý khiếu nại: 0384 288 343</a>
                        </p>
                    </div>
                    <div className={cx('wrap-contact')}>
                        <img
                            src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/email.svg?1663439174633"
                            alt=""
                        />
                        <p>
                            <a href="abc">Email: haulamle@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('coppy-right')}>
                <span>@ Bản quyền thuộc về Fashion.vn All right reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
