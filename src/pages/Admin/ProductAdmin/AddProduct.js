import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function AddProduct() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [idDM, setIdDM] = useState('1');
    const [priceDiscount, setPriceDiscount] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');
    const [file, setFile] = useState('');
    const [status, setStatus] = useState('');

    const [dataDM, setDataDM] = useState([]);

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
    };
    const Add = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('idDM', idDM);
        formData.append('priceDiscount', priceDiscount);
        formData.append('size', size);
        formData.append('quantity', quantity);
        formData.append('name', name);
        formData.append('status', status);

        try {
            await axios.post(`http://localhost:5000/product`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate('/admin-product');
            }, 3000);
        } catch (error) {
            toast.error('Error Notification !', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };
    useEffect(() => {
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
                    <h1>Thêm Sản Phẩm</h1>
                    <div className={cx('wrap-group')}>
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
                            <span>Giá</span>
                            <input placeholder="Nhập Giá" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Giá Gốc</span>
                            <input
                                placeholder="Nhập Gốc"
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
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className={cx('group-input')}>
                            <span>Danh Mục</span>
                            <select id="" onChange={(e) => setIdDM(e.target.value)}>
                                {dataDM.map((data, index) => (
                                    <option key={index} value={data.idDM}>
                                        {data.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('group-input')}>
                            <button className={cx('btn-edit')} onClick={Add}>
                                Thêm Sản Phẩm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddProduct;
