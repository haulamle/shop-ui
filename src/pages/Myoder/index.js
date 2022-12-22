import classNames from 'classnames/bind';
import styles from './Myoder.module.scss';
import { DataGrid } from '@mui/x-data-grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faLocationPin, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import ItemInfo from './ItemInfo';

import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);
function Myoder() {
    const [dataInfo, setDataInfo] = useState([]);
    const [countOder, setCountOder] = useState([]);
    const userCurrent = JSON.parse(localStorage.getItem('dataUser'));
    const idUser = userCurrent.userID || null;
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}invoice`, {
                params: {
                    id: idUser,
                },
            })
            .then(function (response) {
                setDataInfo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}invoiceCount`, {
                params: {},
            })
            .then(function (response) {
                setCountOder(response.data[0].count);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const listItem = [
        {
            icon: <FontAwesomeIcon className={cx('icon-order')} fontSize={16} icon={faUser} />,
            title: 'Tài Khoản Của Tôi',
        },
        {
            icon: <FontAwesomeIcon className={cx('icon-order')} fontSize={16} icon={faBagShopping} />,
            title: 'Đơn Hàng Của Tôi',
        },
        {
            icon: <FontAwesomeIcon className={cx('icon-order')} fontSize={16} icon={faLock} />,
            title: 'Đổi Mật Khẩu',
        },
        {
            icon: <FontAwesomeIcon className={cx('icon-order')} fontSize={16} icon={faLocationPin} />,
            title: 'Sổ Địa Chỉ',
        },
    ];

    // render container infor
    const columns = [
        { field: 'idHD', headerName: 'Mã', width: 50 },
        {
            field: 'product',
            headerName: 'Sản Phẩm',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
            renderCell: (params) => {
                return (
                    <div className={cx('wrap-product')}>
                        <img src={params.row.url} alt="" />
                        <span>{params.row.nameProduct}</span>
                    </div>
                );
            },
        },
        { field: 'status', headerName: 'Trạng Thái', width: 100 },
        { field: 'amount', headerName: 'Số Lượng', width: 70 },
        { field: 'price', headerName: 'Giá', width: 70 },
        { field: 'note', headerName: 'Ghi Chú', width: 160 },
        { field: 'addressReceiver', headerName: 'Địa Chỉ Nhận hàng', width: 120 },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span className={cx('wrap-link')}>
                    <a href="/">Trang Chủ</a> / <a href="/">Tài Khoản</a>
                </span>
                <h1>TÀI KHOẢN</h1>
            </div>
            <div className={cx('container')}>
                <div className={cx('block-account')}>
                    <div className={cx('info')}>
                        <img
                            src="https://bizweb.sapocdn.net/100/438/408/themes/888513/assets/account_ava.jpg?1671014604630"
                            alt=""
                        />
                        <p>Hậu LâmLee</p>
                        <a className={cx('btn-logout')} href="/">
                            Đăng Xuất
                        </a>

                        {listItem.map((data, index) => (
                            <ItemInfo key={index} data={data} />
                        ))}
                    </div>
                </div>
                <div className={cx('info-action')}>
                    <div className={cx('box-title')}>
                        <h1>
                            Đơn Hàng Của Tôi <span>{countOder} Đơn Hàng</span>
                        </h1>
                    </div>

                    <div className={cx('container-infor')}>
                        <div style={{ height: 550, width: '100%' }}>
                            <DataGrid
                                rows={dataInfo}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                getRowId={(row) => row.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myoder;
