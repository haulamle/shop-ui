import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Category, ListProduct, ListService, TrendSearch } from './components';
import { SliderPanner } from '~/components/Slider';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const dataService = [
    {
        img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/ser_1.png?1663406709046',
        alt: 'img1',
        title: 'Miễn phí vận chuyển đơn 0đ',
        method: 'mọi đơn hàng từ 1/9-30/9',
        name: 'FREESHIP',
    },
    {
        img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/ser_2.png?1663406709046',
        alt: 'img2',
        title: 'Đa Dạng Hình Thứ Thanh Toán',
        method: 'Momo, VNPay, COD',
    },
    {
        img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/ser_3.png?1663406709046',
        alt: 'img3',
        title: 'Giao Hàng Nhanh',
        name: '',
        method: 'Chỉ Từ 2-5 Ngày',
    },
    {
        img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/ser_4.png?1663406709046',
        alt: 'img4',
        title: 'Miễn Phí Đổi Trả',
        name: '',
        method: 'Trong 15 ngày tại 180+ Điểm Bán',
    },
];

function Home() {
    return (
        <div className={cx('container')}>
            <SliderPanner />
            <div className={cx('wrapper-list-service')}>
                {dataService.map((data, index) => (
                    <ListService key={index} data={data} />
                ))}
            </div>
            <Category />
            <TrendSearch />
            <ListProduct />
        </div>
    );
}

export default Home;
