import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);
function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [idSP, setIdSP] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [idDM, setIdDM] = useState('');
    const [priceDiscount, setPriceDiscount] = useState('');
    const [size, setSize] = useState('');
    const [amount, setAmount] = useState('');
    const [file, setFile] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');

    const [dataDM, setDataDM] = useState([]);
    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
    };
    const Update = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('idDM', idDM);
        formData.append('priceDiscount', priceDiscount);
        formData.append('size', size);
        formData.append('amount', amount);

        try {
            await axios.put(`http://localhost:5000/product/${id}`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            toast.success('Cập Nhập Thành Công !', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate('/admin-product');
            }, 3000);
        } catch (error) {
            toast.error('Cập Nhập Thất Bại !', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/product/${id}`, {
                params: {},
            })
            .then(function (response) {
                setIdSP(response.data.id);
                setName(response.data.name);
                setPrice(response.data.price);
                setIdDM(response.data.idDM);
                setPriceDiscount(response.data.priceDiscount);
                setSize(response.data.size);
                setAmount(response.data.amount);
                setFile(response.data.image);
                setCreatedAt(response.data.createdAt);
                setUpdatedAt(response.data.updatedAt);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get('http://localhost:5000/category', {
                params: {},
            })
            .then(function (response) {
                setDataDM(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('list-product')}>
                    <h1>Sửa Sản Phẩm</h1>
                    <div className={cx('wrap-group')}>
                        <div className={cx('group-input')}>
                            <span>Sản Phẩm</span>
                            <input
                                disabled={true}
                                placeholder="Nhập ID Sản Phẩm"
                                value={idSP}
                                onChange={(e) => setIdSP(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Tên Sản Phẩm</span>
                            <input
                                placeholder="Nhập Tên Sản Phẩm"
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
                            <span>Giá</span>
                            <input placeholder="Nhập Giá" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Giá Gốc</span>
                            <input
                                placeholder="Nhập Giá Gốc"
                                value={priceDiscount}
                                onChange={(e) => setPriceDiscount(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Size</span>
                            <input placeholder="Nhập Size" value={size} onChange={(e) => setSize(e.target.value)} />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Số Lượng</span>
                            <input
                                placeholder="Nhập Số Lượng"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
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
                            <span>Danh Mục</span>
                            <select id="" onChange={(e) => setIdDM(e.target.value)} value={idDM}>
                                {dataDM.map((data, index) => (
                                    <option key={index} value={data.idDM}>
                                        {data.name}
                                    </option>
                                ))}
                            </select>
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

export default EditProduct;
