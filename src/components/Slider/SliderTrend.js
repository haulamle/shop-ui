import Slider from 'react-slick';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function SliderTrend() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
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
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/b5.jpg?1663439174633',
            alt: 'image1',
        },
        {
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/b2.jpg?1663439174633',
            alt: 'image2',
        },

        {
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/b4.jpg?1663439174633',
            alt: 'image3',
        },
        {
            img: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/b1.jpg?1663439174633',
            alt: 'image4',
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

export default SliderTrend;
