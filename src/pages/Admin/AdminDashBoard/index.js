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
    useEffect(() => {
        axios
            .get('http://localhost:5000/product', {
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
            .get('http://localhost:5000/user', {
                params: {},
            })
            .then(function (response) {
                setTotalUser(response.data.total);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            total: '65.000',
            name: 'Tổng Danh Thu',
        },
        {
            total: 4,
            name: 'Tổng Hoá Đơn',
        },
    ];

    const chartOptions = {
        series: [
            {
                name: 'Tổng Sản Phẩm',
                data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
            },
            {
                name: 'Tổng Danh Thu',
                data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
            },
        ],
        options: {
            color: ['#6ab04c', '#2980b9', '#feb019', '#ff4560'],
            chart: {
                background: 'transparent',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            legend: {
                position: 'top',
            },
            grid: {
                show: false,
            },
        },
    };

    const columns = [
        { field: 'idSP', headerName: 'IDSP', width: 60 },
        {
            field: 'product',
            headerName: 'product',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
            renderCell: (params) => {
                return (
                    <div className={cx('wrap-product')}>
                        <img src={params.row.image} alt="" />
                        <span>{params.row.name}</span>
                    </div>
                );
            },
        },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'priceDiscount', headerName: 'PriceDiscount', width: 100 },
        { field: 'size', headerName: 'Size', width: 90 },
        { field: 'quantity', headerName: 'Quantity', width: 90 },
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
                    <Chart options={chartOptions.options} series={chartOptions.series} type="line" height="100%" />
                </div>
                <div className={cx('list-product')}>
                    <h1>Sản Phẩm Đang Hoạt Động</h1>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={dataProduct}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            getRowId={(row) => row.idSP}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashBoard;
