import classNames from 'classnames/bind';
import { SliderTrend } from '~/components/Slider';
import styles from './TrendSearch.module.scss';

const cx = classNames.bind(styles);

function TrendSearch() {
    return (
        <div className={cx('wrapper')}>
            <h2>XU HƯỚNG TÌM KIẾM</h2>
            <SliderTrend />
        </div>
    );
}

export default TrendSearch;
