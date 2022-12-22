import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CategoryAdmin.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const cx = classNames.bind(styles);

function CategoryAdmin() {
    const [data, setData] = useState([]);

    const deleteCategory = (id) => {
        axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}category/${id}`,
        })
            .then(function (response) {
                toast.success('Đã Xoá Danh Mục !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getCategory();
            })
            .catch(function (error) {
                if (error.response)
                    toast.error('Xoá Danh Mục Thất Bại !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
            });
    };
    useEffect(() => {
        getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCategory = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}category`, {
                params: {},
            })
            .then(function (response) {
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const columns = [
        { field: 'idDM', headerName: 'ID', width: 50 },
        {
            field: 'category',
            headerName: 'Danh Mục',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
            renderCell: (params) => {
                return (
                    <div className={cx('wrap-category')}>
                        <img src={params.row.url} alt="" />
                        <span>{params.row.name}</span>
                    </div>
                );
            },
        },
        { field: 'status', headerName: 'Trạng Thái', width: 80 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 160 },
        { field: 'updatedAt', headerName: 'UpdatedAt', width: 160 },
        {
            field: 'action',
            headerName: 'Hành Động',
            description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={cx('btn-action')}>
                        <Link to={`/admin-category/edit/${params.row.idDM}`} className={cx('action-edit')}>
                            Sửa
                        </Link>
                        <button className={cx('action-delete')} onClick={() => deleteCategory(params.row.idDM)}>
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
                    <div className={cx('list-category')}>
                        <h1>Danh Sách Danh Mục</h1>
                        <Link to="/admin-category/add" className={cx('btn-add')}>
                            Thêm Danh Mục
                        </Link>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                getRowId={(row) => row.idDM}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CategoryAdmin;
