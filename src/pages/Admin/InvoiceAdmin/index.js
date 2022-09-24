import classNames from 'classnames/bind';
import styles from './InvoiceAdmin.module.scss';

const cx = classNames.bind(styles);

function InvoiceAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h2>InvoiceAdmin</h2>
        </div>
    );
}

export default InvoiceAdmin;
