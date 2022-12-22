import classNames from 'classnames/bind';
import styles from './StatisticAdmin.module.scss';

import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';

import axios from 'axios';

const cx = classNames.bind(styles);

function StatisticAdmin() {
    const [data, setData] = useState([]);
    const bill = data.map((data) => {
        return data.price * data.amount;
    });
    const totalPrice = bill.reduce((acc, cur) => acc + cur, 0);
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
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ]);
    useEffect(() => {
        const price = [];
        const name = [];
        axios
            .get(`${process.env.REACT_APP_API_URL}invoice`, {
                params: {},
            })
            .then(function (response) {
                response.data.map((data) => {
                    price.push(data.price * data.amount + '000');
                    name.push(data.nameReceiver);
                });
                setData(response.data);
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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('chart')}>
                    <div className={cx('chart-bar')}>
                        <Chart options={options} series={series} type="bar" height="100%" />
                    </div>
                    <div className={cx('chart-line')}>
                        <Chart options={options} series={series} type="line" height="100%" />
                    </div>
                </div>
                <div className={cx('total-price')}>{`Tổng Danh Thu ${totalPrice}.000đ`}</div>
            </div>
        </div>
    );
}

export default StatisticAdmin;
