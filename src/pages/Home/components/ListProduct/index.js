import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Product from '~/components/Product';
import styles from './ListProduct.module.scss';
import axios from 'axios';
const cx = classNames.bind(styles);

function ListProduct() {
    const buttoncheck = ['ÁO POLO', 'ÁO THUN', 'QUẦN JEAN', 'ÁO SƠ MI', 'QUẦN ÂU'];
    const [dataProduct, setDataProduct] = useState([]);
    const [dataProduct2, setDataProduct2] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/product', {
                params: {
                    limit: 20,
                },
            })
            .then(function (response) {
                setDataProduct(response.data.data);
                setDataProduct2(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const handleFilter = (e) => {
        const data = dataProduct2.filter((product) => product?.name?.toLowerCase()?.includes(e.toLowerCase()));
        setDataProduct(data);
    };
    return (
        <div className={cx('wrapper')}>
            <h2>EVERYDAY WEAR - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
            <div className={cx('wrapper-btn')}>
                {buttoncheck.map((item, index) => (
                    <Button
                        key={index}
                        primary
                        onClick={() => {
                            handleFilter(item);
                        }}
                    >
                        {item}
                    </Button>
                ))}
            </div>
            <div className={cx('wrapper-product')}>
                {dataProduct.map((product) => (
                    <Product key={product.idSP} data={product} />
                ))}
            </div>
            <div className={cx('btn-all')}>
                <Button to={'abc'} background>
                    Xem Thêm
                </Button>
            </div>
        </div>
    );
}

export default ListProduct;
