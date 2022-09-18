import Slider from 'react-slick';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function SliderPanner() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const data = [
        {
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_4.jpg?1663406709046',
            alt: 'image1',
        },
        {
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_2.jpg?1663406709046',
            alt: 'image2',
        },
        {
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_3.jpg?1663406709046',
            alt: 'image3',
        },
    ];
    return (
        <div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className={cx('wrapper')}>
                        <img src={item.img} alt={item.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderPanner;
