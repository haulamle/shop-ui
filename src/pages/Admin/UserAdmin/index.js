import { useEffect, useState } from 'react';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './UserAdmin.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function UserAdmin() {
    const [dataUser, setDataUser] = useState([]);

    const deleteUser = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/user/${id}`,
        })
            .then(function (response) {
                toast.success('Success Notification !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                getUser();
            })
            .catch(function (error) {
                toast.error('Error Notification !', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };
    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getUser = () => {
        axios
            .get('http://localhost:5000/user', {
                params: {},
            })
            .then(function (response) {
                setDataUser(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const columns = [
        { field: 'idUser', headerName: 'ID', width: 50 },
        { field: 'account', headerName: 'Tài Khoản', width: 100 },
        { field: 'password', headerName: 'Mật Khẩu', width: 140 },
        { field: 'phone', headerName: 'Số Điện Thoại', width: 80 },
        { field: 'email', headerName: 'Email', width: 120 },
        { field: 'address', headerName: 'Địa Chỉ', width: 60 },
        { field: 'status', headerName: 'Trạng Thái', width: 80 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 160 },
        { field: 'updatedAt', headerName: 'UpdatedAt', width: 160 },
        {
            field: 'action',
            headerName: 'action',
            description: 'This column has a value getter and is not sortable.',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={cx('btn-action')}>
                        <Link to={`/admin-user/edit/${params.row.idUser}`} className={cx('action-edit')}>
                            Sửa
                        </Link>
                        <button className={cx('action-delete')} onClick={() => deleteUser(params.row.idUser)}>
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
                <div className={cx('list-user')}>
                    <h1>Danh Sách Tài Khoản</h1>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={dataUser}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            getRowId={(row) => row.idUser}
                        />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UserAdmin;
