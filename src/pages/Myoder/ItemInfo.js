import classNames from 'classnames/bind';
import styles from './Myoder.module.scss';

const cx = classNames.bind(styles);
function ItemInfo({ data }) {
    return (
        <>
            <div className={cx('wrap-infomation-info')}>
                {data.icon}
                <span>{data.title}</span>
            </div>
        </>
    );
}

export default ItemInfo;
