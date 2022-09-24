import classNames from 'classnames/bind';
import styles from './StatisticAdmin.module.scss';

const cx = classNames.bind(styles);

function StatisticAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h2>StatisticAdmin</h2>
        </div>
    );
}

export default StatisticAdmin;
