import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '~/components/Product';
import LoadingIcon from '~/components/Loading';

const cx = classNames.bind(styles);

function ProductPage() {
    const { id } = useParams();
    const [dataProduct, setDataProduct] = useState([]);
    const [dataProductFilter, setDataProductFilter] = useState([]);
    const [totalProduct, setTotalProduct] = useState();
    const [loading, setLoading] = useState(true);
    console.log(loading);

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`http://localhost:5000/product/catogory/${id}`, {
                    params: {},
                })
                .then(function (response) {
                    setDataProduct(response.data.data);
                    setDataProductFilter(response.data.data);
                    setTotalProduct(response.data.total);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleFilter = (e) => {
        const data = dataProductFilter.filter((product) => product?.name?.toLowerCase()?.includes(e.toLowerCase()));
        setDataProduct(data);
        setTimeout(() => {
            setLoading(false);
        }, 1400);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-panner')}>
                <img src="https://bizweb.dktcdn.net/100/438/408/files/polopc.jpg?v=1657939410701" alt="" />
            </div>
            <div className={cx('action-btn')}>
                <Link to="/">Trang chủ </Link> / <span>BỘ SƯU TẬP</span>
            </div>
            <h1>SẢN PHẨM CỦA YODY</h1>
            <div className={cx('wrap-btn')}>
                <Button
                    primary
                    onClick={() => {
                        handleFilter('NAM');
                        setLoading(!loading);
                    }}
                >
                    NAM
                </Button>
                <Button
                    primary
                    onClick={() => {
                        handleFilter('NỮ');
                        setLoading(!loading);
                    }}
                >
                    NỮ
                </Button>
                <Button
                    primary
                    onClick={() => {
                        handleFilter('TRẺ EM');
                        setLoading(!loading);
                    }}
                >
                    TRẺ EM
                </Button>
            </div>
            <div className={cx('wrap-container')}>
                <div className={cx('selective')}>
                    <span>Loại Sản Phẩm</span>
                    <span>Màu sắc</span>
                    <span>Kích Thước</span>
                    <span>Chất Liệu</span>
                    <span>Khoảng Giá</span>
                </div>
                <div className={cx('wrap')}>
                    <div className={cx('wrap-title')}>
                        <span className={cx('total-product')}>{totalProduct} sản Phẩm</span>
                        <div className={cx('wrapper-sort')}>
                            Sắp Xếp Theo <span className={cx('sort')}>Mặc định</span>
                        </div>
                    </div>
                    {loading ? (
                        <LoadingIcon />
                    ) : (
                        <div className={cx('wrapper-product')}>
                            {dataProduct.map((product) => (
                                <Product key={product.idSP} data={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
