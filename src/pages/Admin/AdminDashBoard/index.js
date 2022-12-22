import Chart from 'react-apexcharts';
import { DataGrid } from '@mui/x-data-grid';

import classNames from 'classnames/bind';
import styles from './AdminDashBoard.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function AdminDashBoard() {
    const [dataProduct, setDataProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState('');
    const [totalUser, setTotalUser] = useState('');
    const [countOder, setCountOder] = useState('');
    const [invoice, setInvoice] = useState([]);
    const bill = invoice.map((data) => {
        return data.price * data.amount;
    });
    const totalPrice = bill.reduce((acc, cur) => acc + cur, 0);
    useEffect(() => {
        const price = [];
        const name = [];
        axios
            .get(`${process.env.REACT_APP_API_URL}product`, {
                params: {},
            })
            .then(function (response) {
                setDataProduct(response.data.data);
                setTotalProduct(response.data.total);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        axios
            .get(`${process.env.REACT_APP_API_URL}user`, {
                params: {},
            })
            .then(function (response) {
                setTotalUser(response.data.total);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        axios
            .get(`${process.env.REACT_APP_API_URL}invoice`, {
                params: {},
            })
            .then(function (response) {
                setInvoice(response.data);
                response.data.map((data) => {
                    price.push(data.price * data.amount + '000');
                    name.push(data.nameReceiver);
                });
                setOptions({
                    chart: {
                        id: 'basic-bar',
                    },
                    xaxis: {
                        categories: name,
                    },
                });
                setSeries([
                    {
                        name: 'Thành Tiền',
                        data: price,
                    },
                ]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const listtotal = [
        {
            total: totalUser,
            name: 'Tổng Tài Khoản',
        },
        {
            total: totalProduct,
            name: 'Tổng Sản Phẩm',
        },
        {
            total: `${totalPrice}.000đ`,
            name: 'Tổng Danh Thu',
        },
        {
            total: countOder,
            name: 'Tổng Hoá Đơn',
        },
    ];

    const [options, setOptions] = useState({
        color: ['#6ab04c', '#2980b9', '#feb019', '#ff4560'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        legend: {
            position: 'top',
        },
        grid: {
            show: false,
        },
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    });
    const [series, setSeries] = useState([
        {
            name: 'Thành Tiền',
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ]);

    const columns = [
        { field: 'id', headerName: 'id', width: 60 },
        {
            field: 'product',
            headerName: 'product',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
            renderCell: (params) => {
                return (
                    <div className={cx('wrap-product')}>
                        <img src={params.row.url} alt="" />
                        <span>{params.row.name}</span>
                    </div>
                );
            },
        },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'priceDiscount', headerName: 'PriceDiscount', width: 100 },
        { field: 'size', headerName: 'Size', width: 90 },
        { field: 'amount', headerName: 'amount', width: 90 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 170 },
        { field: 'updatedAt', headerName: 'UpdatedAt', width: 200 },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('statistic')}>
                    {listtotal.map((item, index) => (
                        <div key={index} className={cx('box-statistic')}>
                            <span>{item.name}</span>
                            <h1>{item.total}</h1>
                        </div>
                    ))}
                </div>
                <div className={cx('chart')}>
                    <div className={cx('chart-bar')}>
                        <Chart options={options} series={series} type="bar" height="100%" />
                    </div>
                    <div className={cx('chart-line')}>
                        <Chart options={options} series={series} type="line" height="100%" />
                    </div>
                </div>
                <div className={cx('list-product')}>
                    <h1>Sản Phẩm Đang Hoạt Động</h1>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={dataProduct}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            getRowId={(row) => row.id}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashBoard;
