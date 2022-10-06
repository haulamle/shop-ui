import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryAdmin.module.scss';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function AddCategory() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [status, setStatus] = useState('');

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
    };
    const Add = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('status', status);

        try {
            await axios.post(`http://localhost:5000/category`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate('/admin-category');
            }, 3000);
        } catch (error) {
            toast.error('Error Notification !', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('list-category')}>
                    <h1>Thêm Danh Mục</h1>
                    <div className={cx('wrap-group')}>
                        <div className={cx('group-input')}>
                            <span>Tên Danh Mục</span>
                            <input
                                placeholder="Nhập Tên Danh Mục"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Hình Ảnh</span>
                            <input placeholder="Hình Ảnh" type="file" onChange={loadImage} />
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
                            <button className={cx('btn-edit')} onClick={Add}>
                                Thêm Danh Mục
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddCategory;
