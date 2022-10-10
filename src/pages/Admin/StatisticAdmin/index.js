import classNames from 'classnames/bind';
import styles from './StatisticAdmin.module.scss';

import Chart from 'react-apexcharts';

const cx = classNames.bind(styles);

function StatisticAdmin() {
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
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('chart')}>
                    <Chart options={chartOptions.options} series={chartOptions.series} type="line" height="100%" />
                </div>
            </div>
        </div>
    );
}

export default StatisticAdmin;
