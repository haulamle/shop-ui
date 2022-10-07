import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function Login() {
    const [msgErr, setMsgErr] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');
    const [shPassword, setShPassword] = useState(false);
    const navigate = useNavigate();
    let a = [];

    const handleSubmit = () => {
        if (account === undefined || password === undefined) {
            setMsgErr('Vui Lòng Không Được Để trống !');
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:5000/login',
                data: {
                    account: account,
                    password: password,
                },
            })
                .then(function (response) {
                    let receiveddata = JSON.stringify(response.data);
                    a.push(receiveddata);
                    localStorage.setItem('dataUser', a);
                    if (response.data.role === 0) {
                        toast.success('Đăng Nhập Thành Công !', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                        setTimeout(() => {
                            navigate('/admin');
                        }, 3000);
                    } else {
                        toast.success('Đăng Nhập Thành Công !', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                        setTimeout(() => {
                            navigate('/');
                        }, 3000);
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        setMsgErr(error.response.data.msg);
                        toast.error('Đăng Nhập Thất Bại !', {
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
                    <h1 className={cx('title-login')}>Đăng Nhập</h1>
                </span>
                <div className={cx('input-login')}>
                    <input placeholder="Nhập Tài Khoản" onChange={(e) => setAccount(e.target.value)} />
                </div>
                <div className={cx('input-login')}>
                    <input
                        type={shPassword ? 'text' : 'password'}
                        placeholder="Nhập Mật Khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={cx('icon-show-hide')} onClick={() => setShPassword(!shPassword)}>
                        {shPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>
                </div>

                <span className={cx('err-validate')}>{msgErr}</span>
                <div className={cx('btn-login')} onClick={handleSubmit}>
                    <Button background>Đăng Nhập</Button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
