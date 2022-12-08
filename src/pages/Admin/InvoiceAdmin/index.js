import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './InvoiceAdmin.module.scss';
import { DataGrid } from '@mui/x-data-grid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const cx = classNames.bind(styles);

function InvoiceAdmin() {
    const [data, setdata] = useState([]);

    const cancelInvoices = async (id) => {
        await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}invoice/${id}`,
            data: {
                status: 'Đã Bị Huỷ',
            },
        })
            .then(function (response) {
                toast.success('Đã Huỷ Hoá Đơn !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getInvoices();
            })
            .catch(function (error) {
                if (error.response)
                    toast.error('Huỷ Hoá Đơn Thất Bại !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
            });
    };

    const approveInvoices = async (id) => {
        await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}invoice/${id}`,
            data: {
                status: 'Đang Vận Chuyển',
            },
        })
            .then(function (response) {
                toast.success('Đã Duyệt Hoá Đơn !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getInvoices();
            })
            .catch(function (error) {
                if (error.response)
                    toast.error('Duyệt Hoá Đơn Thất Bại !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
            });
    };

    const completeInvoices = async (id) => {
        await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}invoice/${id}`,
            data: {
                status: 'Đã Giao',
            },
        })
            .then(function (response) {
                toast.success('Đã Chuyển Trạng Thái Hoá Đơn !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getInvoices();
            })
            .catch(function (error) {
                if (error.response)
                    toast.error('Chuyển Hoá Đơn Thất Bại !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
            });

        await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}invoicedetail/${id}`,
        });
        await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}invoice/${id}`,
        });
    };

    const returnInvoices = async (id) => {
        await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}invoice/${id}`,
            data: {
                status: 'Chờ Duyệt',
            },
        })
            .then(function (response) {
                toast.success('Đã Chuyển Trạng Thái Hoá Đơn !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getInvoices();
            })
            .catch(function (error) {
                if (error.response)
                    toast.error('Duyệt Hoá Đơn Thất Bại !', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
            });
    };

    useEffect(() => {
        getInvoices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInvoices = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}invoice`, {
                params: {},
            })
            .then(function (response) {
                setdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const columns = [
        {
            field: 'product',
            headerName: 'Sản Phẩm',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 240,
            renderCell: (params) => {
                return (
                    <div className={cx('wrap-product')}>
                        <img src={params.row.url} alt="" />
                        <span>{params.row.nameProduct}</span>
                    </div>
                );
            },
        },
        { field: 'price', headerName: 'Giá', width: 80 },
        { field: 'status', headerName: 'Trạng Thái', width: 110 },
        { field: 'note', headerName: 'Ghi Chú', width: 160 },
        { field: 'nameReceiver', headerName: 'Người Nhận', width: 80 },
        { field: 'addressReceiver', headerName: 'Địa Chỉ Nhận', width: 80 },
        { field: 'phoneReceiver', headerName: 'Số Điện Thoại', width: 80 },
        { field: 'amount', headerName: 'Số Lượng', width: 60 },
        // { field: 'createdAt', headerName: 'Ngày Tạo', width: 100 },
        // { field: 'updatedAt', headerName: 'Ngày Cập nhập', width: 100 },
        {
            field: 'action',
            headerName: 'Hành Động',
            description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={cx('btn-action')}>
                        {params.row.status === 'Chờ Duyệt' ? (
                            <>
                                <button
                                    className={cx('action-approve')}
                                    onClick={() => approveInvoices(params.row.idHD)}
                                >
                                    Duyệt
                                </button>
                                <button
                                    className={cx('action-approve')}
                                    onClick={() => cancelInvoices(params.row.idHD)}
                                >
                                    Huỷ
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className={cx('action-approve')}
                                    onClick={() => completeInvoices(params.row.idHD)}
                                >
                                    Đã Giao
                                </button>
                                <button
                                    className={cx('action-approve')}
                                    onClick={() => returnInvoices(params.row.idHD)}
                                >
                                    Về Chờ Duyệt
                                </button>
                            </>
                        )}
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
                        <h1>Danh Sách Hoá Đơn</h1>

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

export default InvoiceAdmin;
