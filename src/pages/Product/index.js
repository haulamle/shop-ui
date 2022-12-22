import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '~/components/Product';
import LoadingIcon from '~/components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductPage() {
    const genderCheck = ['NAM', 'NỮ', 'TRẺ EM'];
    const stt = [1, 2, 3, 4];
    const { id } = useParams();
    const [dataProduct, setDataProduct] = useState([]);
    const [dataProductFilter, setDataProductFilter] = useState([]);
    const [totalProduct, setTotalProduct] = useState();
    const [litmit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dataTime = setTimeout(() => {
            axios
                .get(`${process.env.REACT_APP_API_URL}product/catogory/${id}`, {
                    params: {
                        limit: litmit,
                        page: page,
                    },
                })
                .then(function (response) {
                    setDataProduct(response.data.data);
                    setTotalProduct(response.data.total);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 2000);
        return () => clearTimeout(dataTime);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}product/catogory/${id}`, {
                params: {},
            })
            .then(function (response) {
                setDataProductFilter(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handlerArrowLeftPage = () => {
        if (page === 1) {
            return;
        } else {
            setPage(page - 1);
        }
        setLoading(!loading);
    };
    // console.log(page);
    // console.log(litmit);

    const handlerArrowRightPage = () => {
        if (page === stt.length) {
            return;
        } else {
            setPage(page + 1);
        }
        setLoading(!loading);
    };
    const handleFilter = (e) => {
        const data = dataProductFilter.filter((product) => product?.name?.toLowerCase()?.includes(e.toLowerCase()));
        setDataProduct(data);
        const loadingTime = setTimeout(() => {
            setLoading(false);
        }, 1400);
        return () => clearTimeout(loadingTime);
    };
    const type = ['Loại Sản Phẩm', 'Màu sắc', 'Kích Thước', 'Chất Liệu', 'Khoảng Giá'];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-panner')}>
                <img src="https://bizweb.dktcdn.net/100/438/408/files/polopc.jpg?v=1657939410701" alt="" />
            </div>
            <div className={cx('action-btn')}>
                <Link to="/">Trang chủ </Link> / <span>BỘ SƯU TẬP</span>
            </div>
            <h1>SẢN PHẨM CỦA Fashion Shop</h1>
            <div className={cx('wrap-btn')}>
                {genderCheck.map((value, index) => (
                    <Button
                        key={index}
                        // style={
                        //     value === gender
                        //         ? {
                        //               backgroundColor: '#fcaf17',
                        //               color: '#fff',
                        //           }
                        //         : {}
                        // }
                        primary
                        onClick={() => {
                            handleFilter(value);
                            setLoading(!loading);
                            // setGender(value);
                        }}
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className={cx('wrap-container')}>
                <div className={cx('selective')}>
                    {type.map((data, index) => (
                        <span key={index}>{data}</span>
                    ))}
                </div>
                <div className={cx('wrap')}>
                    <div className={cx('wrap-title')}>
                        <span className={cx('total-product')}>{totalProduct} Sản Phẩm</span>
                        <div className={cx('wrapper-sort')}>
                            Sắp Xếp Theo <span className={cx('sort')}>Mặc định</span>
                        </div>
                    </div>
                    {loading ? (
                        <LoadingIcon />
                    ) : (
                        <div className={cx('wrapper-product')}>
                            {dataProduct.map((product) => (
                                <Product key={product.id} data={product} />
                            ))}
                        </div>
                    )}
                    {totalProduct <= 10 ? (
                        <></>
                    ) : (
                        <div className={cx('btn-paging')}>
                            <span onClick={handlerArrowLeftPage}>
                                <FontAwesomeIcon fontSize={16} icon={faArrowLeft} />
                            </span>
                            {stt.map((value, index) => (
                                <span
                                    key={index}
                                    style={
                                        value === page
                                            ? {
                                                  backgroundColor: '#fcaf17',
                                                  color: '#fff',
                                              }
                                            : {}
                                    }
                                    onClick={() => {
                                        setPage(value);
                                        setLimit(10);
                                        setLoading(!loading);
                                    }}
                                >
                                    {value}
                                </span>
                            ))}
                            <span onClick={handlerArrowRightPage}>
                                <FontAwesomeIcon fontSize={16} icon={faArrowRight} />
                            </span>
                        </div>
                    )}
                    {totalProduct === 0 ? <h1>Không Có Sản Phẩm Tồn Tại</h1> : <></>}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
