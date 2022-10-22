import classNames from 'classnames/bind';
import styles from './CategoryAdmin.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);
function EditCategory() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [idDM, setIdDM] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [status, setStatus] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
    };
    const Update = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('idDM', idDM);
        formData.append('status', status);

        try {
            await axios.put(`${process.env.REACT_APP_API_URL}category/${id}`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            toast.success('Cập Nhập Thành Công !', {
                position: toast.POSITION.TOP_RIGHT,
            });
            const navigateTime = setTimeout(() => {
                navigate('/admin-category');
            }, 3000);
            return () => clearTimeout(navigateTime);
        } catch (error) {
            toast.error('Cập Nhập Thất Bại !', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}category/${id}`, {
                params: {},
            })
            .then(function (response) {
                setIdDM(response.data.idDM);
                setName(response.data.name);
                setFile(response.data.image);
                setStatus(response.data.status);
                setCreatedAt(response.data.createdAt);
                setUpdatedAt(response.data.updatedAt);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('list-category')}>
                    <h1>Sửa Danh Mục</h1>
                    <div className={cx('wrap-group')}>
                        <div className={cx('group-input')}>
                            <span>Danh Mục</span>
                            <input
                                placeholder="Nhập ID Danh Mục"
                                value={idDM}
                                onChange={(e) => setIdDM(e.target.value)}
                            />
                        </div>
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
                            <input
                                placeholder="Hình Ảnh"
                                value={file.name ? file.name : file}
                                onChange={() => {
                                    return;
                                }}
                            />
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
                            <span>Ngày Tạo</span>
                            <input
                                placeholder="Ngày Tạo"
                                value={createdAt ? createdAt : 'chưa có thông tin'}
                                onChange={() => {
                                    return;
                                }}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Ngày Cập Nhật</span>
                            <input
                                placeholder="Ngày Cập Nhật"
                                value={updatedAt ? updatedAt : 'chưa có thông tin'}
                                onChange={() => {
                                    return;
                                }}
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

export default EditCategory;
