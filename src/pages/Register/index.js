import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { useState } from 'react';
import axios from 'axios';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function Register() {
    const [shPassword, setShPassword] = useState(false);
    const [shConfirm, setShConfirm] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            account: '',
            password: '',
            confirmPassword: '',
            address: '',
            phone: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required('You must fill in this section!'),
            account: Yup.string()
                .min(5, 'Your name must be at least 5 character!')
                .max(25, 'Your name must be under 25 character!')
                .required('You must fill in this section!'),
            address: Yup.string().required('You must fill in this section!'),
            password: Yup.string()
                .min(8, 'Your password must be at least 5 character!')
                .required('You must fill in this section!'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Password does not match!')
                .required('You must fill in this section!'),
            phone: Yup.number()
                .typeError("That doesn't look like a phone number")
                .positive("A phone number can't start with a minus")
                .integer("A phone number can't include a decimal point")
                .min(8)
                .required('You must fill in this section!'),
        }),
        onSubmit: (values) => {
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}register`,
                data: values,
            })
                .then(function (response) {
                    toast.success('Đăng Ký Tài Khoản Thành Công', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                })
                .catch(function (error) {
                    if (error.response) {
                        toast.error('Tài Khoản Đã Tồn Tại', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                });
        },
    });

    return (
        <div className={cx('wrapper')}>
            <form className={cx('container')} onSubmit={formik.handleSubmit}>
                <span className={cx('wrap-title')}>
                    <a href="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                    <h1 className={cx('title-register')}>ĐĂNG KÝ THÀNH VIÊN MỚI</h1>
                </span>
                <div className={cx('input-register')}>
                    <input
                        placeholder="Nhập Email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.email && formik.touched.email && (
                    <span className={cx('err-validate')}>{formik.errors.email}</span>
                )}
                <div className={cx('input-register')}>
                    <input
                        placeholder="Nhập Tài Khoản"
                        name="account"
                        value={formik.values.account}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.account && formik.touched.account && (
                    <span className={cx('err-validate')}>{formik.errors.account}</span>
                )}
                <div className={cx('input-register')}>
                    <input
                        type={shPassword ? 'text' : 'password'}
                        placeholder="Nhập Mật Khẩu"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <button
                        className={cx('icon-show-hide')}
                        onClick={(e) => {
                            e.preventDefault();
                            setShPassword(!shPassword);
                        }}
                    >
                        {shPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>
                </div>
                {formik.errors.password && formik.touched.password && (
                    <span className={cx('err-validate')}>{formik.errors.password}</span>
                )}
                <div className={cx('input-register')}>
                    <input
                        type={shConfirm ? 'text' : 'password'}
                        placeholder="Xác Nhận Mật Khẩu"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />
                    <button
                        className={cx('icon-show-hide')}
                        onClick={(e) => {
                            e.preventDefault();
                            setShConfirm(!shConfirm);
                        }}
                    >
                        {shConfirm ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>
                </div>
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <span className={cx('err-validate')}>{formik.errors.confirmPassword}</span>
                )}
                <div className={cx('input-register')}>
                    <input
                        placeholder="Nhập Địa Chỉ"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.address && formik.touched.address && (
                    <span className={cx('err-validate')}>{formik.errors.address}</span>
                )}
                <div className={cx('input-register')}>
                    <input
                        placeholder="Nhập Số Điện Thoại"
                        value={formik.values.phone}
                        name="phone"
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.phone && formik.touched.phone && (
                    <span className={cx('err-validate')}>{formik.errors.phone}</span>
                )}
                <div className={cx('btn-register')}>
                    <Button type="submit" background>
                        Đăng Ký
                    </Button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Register;
