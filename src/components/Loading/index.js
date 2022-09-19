import classNames from 'classnames/bind';
import loading from '~/assets/images/loading.gif';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);
function LoadingIcon() {
    return (
        <div className={cx('wrapper')}>
            <img src={loading} alt="loading" />
        </div>
    );
}

export default LoadingIcon;
