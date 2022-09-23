import classNames from 'classnames/bind';
import styles from './UserAdmin.module.scss';

const cx = classNames.bind(styles);

function UserAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h2>UserAdmin</h2>
        </div>
    );
}

export default UserAdmin;
