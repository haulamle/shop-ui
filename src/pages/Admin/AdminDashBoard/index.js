import classNames from 'classnames/bind';
import styles from './AdminDashBoard.module.scss';

const cx = classNames.bind(styles);

function AdminDashBoard() {
    const listtotal = [
        {
            total: 20,
            name: 'Tổng Tài Khoản',
        },
        {
            total: 10,
            name: 'Tổng Sản Phẩm',
        },
        {
            total: 6,
            name: 'Tổng Danh Thu',
        },
        {
            total: 4,
            name: 'Tổng Hoá Đơn',
        },
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
            </div>
        </div>
    );
}

export default AdminDashBoard;
