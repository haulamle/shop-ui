import { useEffect, useState } from 'react';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './UserAdmin.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [phone, setphone] = useState();
    const [role, setRole] = useState();

    const Update = (e) => {
        e.preventDefault();
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}user/${id}`,
            data: {
                account: account,
                password: password,
                email: email,
                address: address,
                status: status,
                phone: phone,
            },
        })
            .then(function (response) {
                toast.success('Sửa Thông Tin Thành Công !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                const navigateTime = setTimeout(() => {
                    navigate('/admin-user');
                }, 3000);
                return () => clearTimeout(navigateTime);
            })
            .catch(function (error) {
                toast.error('Sửa Thông Tin Thất Bại !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}user/${id}`, {
                params: {},
            })
            .then(function (response) {
                setAccount(response.data[0].account);
                setPassword(response.data[0].password);
                setEmail(response.data[0].email);
                setAddress(response.data[0].address);
                setStatus(response.data[0].status);
                setphone(response.data[0].phone);
                setRole(response.data[0].role);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('list-user')}>
                    <h1>Sửa Tài Khoản</h1>
                    <div className={cx('wrap-group')}>
                        <div className={cx('group-input')}>
                            <span>Tài Khoản</span>
                            <input
                                disabled={true}
                                placeholder="Nhập tài khoản"
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Mật Khẩu</span>
                            <input
                                placeholder="Nhập mật Khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Email</span>
                            <input placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Địa Chỉ</span>
                            <input
                                placeholder="Nhập địa chỉ"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Trạng Thái</span>
                            <input
                                placeholder="Nhập trạng thái"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Role</span>
                            <input placeholder="Nhập role" value={role} onChange={(e) => setRole(e.target.value)} />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Số Điện Thoại</span>
                            <input
                                placeholder="Nhập số điện thoại"
                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <button className={cx('btn-edit')} onClick={Update}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditUser;
