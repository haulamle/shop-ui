import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const cx = classNames.bind(styles);

function ProductAdmin() {
    const [data, setdata] = useState([]);

    const deleteProduct = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/product/${id}`,
        })
            .then(function (response) {
                toast.success('Đã Xoá Sản Phẩm !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getProduct();
            })
            .catch(function (error) {
                if (error.response)
                    toast.error('Xoá Sản Phẩm Thất Bại !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
            });
    };
    useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProduct = () => {
        axios
            .get('http://localhost:5000/product', {
                params: {},
            })
            .then(function (response) {
                setdata(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'product',
            headerName: 'Sản Phẩm',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={cx('wrap-product')}>
                        <img src={params.row.url} alt="" />
                        <span>{params.row.name}</span>
                    </div>
                );
            },
        },
        { field: 'price', headerName: 'Giá', width: 80 },
        { field: 'idDM', headerName: 'idDM', width: 60 },
        { field: 'priceDiscount', headerName: 'Giảm Giá', width: 80 },
        { field: 'size', headerName: 'size', width: 50 },
        { field: 'amount', headerName: 'Số Lượng', width: 80 },
        { field: 'createdAt', headerName: 'createdAt', width: 130 },
        { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
        {
            field: 'action',
            headerName: 'Hành Động',
            description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={cx('btn-action')}>
                        <Link to={`/admin-product/edit/${params.row.id}`} className={cx('action-edit')}>
                            Sửa
                        </Link>
                        <button className={cx('action-delete')} onClick={() => deleteProduct(params.row.id)}>
                            Xoá
                        </button>
                    </div>
                );
            },
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container')}>
                    <div className={cx('list-product')}>
                        <h1>Danh Sách Sản Phẩm</h1>
                        <Link to="/admin-product/add" className={cx('btn-add')}>
                            Thêm Sản Phẩm
                        </Link>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                getRowId={(row) => row.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductAdmin;
