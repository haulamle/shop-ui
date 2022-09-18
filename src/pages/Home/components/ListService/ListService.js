import classNames from 'classnames/bind';
import styles from './ListService.module.scss';

const cx = classNames.bind(styles);

function ListService({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('service-left')}>
                <img src={data.img} alt={data.alt} />
            </div>
            <div className={cx('service-right')}>
                <p>{data.title}</p>
                <span>
                    <b>{data.name}</b>
                    {data.method}
                </span>
            </div>
        </div>
    );
}

export default ListService;
