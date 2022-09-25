import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function Register() {
    const [msgErr, setMsgErr] = useState('');
    const [shPassword, setShPassword] = useState(false);
    const [shConfirm, setShConfirm] = useState(false);
    const [email, setEmail] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState();
    console.log(email, account, password, confirmPassword, address, phone);
    console.log(msgErr);

    const handleSubmit = () => {
        if (
            account === undefined ||
            password === undefined ||
            confirmPassword === undefined ||
            email === undefined ||
            address === undefined ||
            phone === undefined
        ) {
            setMsgErr('Vui Lòng Không Được Để trống !');
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:5000/register',
                data: {
                    account: account,
                    password: password,
                    confirmPassword: confirmPassword,
                    email: email,
                    address: address,
                    phone: phone,
                },
            })
                .then(function (response) {
                    console.log(response.data.msg);
                    setMsgErr(response.data.msg);
                    toast.success('Success Notification !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                })
                .catch(function (error) {
                    if (error.response) {
                        setMsgErr(error.response.data.msg);
                        toast.error('Error Notification !', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <span className={cx('wrap-title')}>
                    <a href="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                    <h1 className={cx('title-register')}>ĐĂNG KÝ THÀNH VIÊN MỚI</h1>
                </span>
                <div className={cx('input-register')}>
                    <input placeholder="Nhập Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Nhập Tài Khoản" onChange={(e) => setAccount(e.target.value)} />
                </div>
                <div className={cx('input-register')}>
                    <input
                        type={shPassword ? 'text' : 'password'}
                        placeholder="Nhập Mật Khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={cx('icon-show-hide')} onClick={() => setShPassword(!shPassword)}>
                        {shPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>
                </div>
                <div className={cx('input-register')}>
                    <input
                        type={shConfirm ? 'text' : 'password'}
                        placeholder="Xác Nhận Mật Khẩu"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className={cx('icon-show-hide')} onClick={() => setShConfirm(!shConfirm)}>
                        {shConfirm ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Nhập Địa Chỉ" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Nhập Số Điện Thoại" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <span className={cx('err-validate')}>{msgErr}</span>
                <div className={cx('btn-register')} onClick={handleSubmit}>
                    <Button background>Đăng Ký</Button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
