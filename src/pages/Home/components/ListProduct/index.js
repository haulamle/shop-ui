import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Product from '~/components/Product';
import LoadingIcon from '~/components/Loading';
import styles from './ListProduct.module.scss';
import axios from 'axios';
const cx = classNames.bind(styles);

function ListProduct() {
    const productCategoryList = [
        {
            name: 'ÁO POLO',
            idDM: 1,
        },
        {
            name: 'ÁO THUN',
            idDM: 2,
        },
        {
            name: 'QUẦN JEAN',
            idDM: 6,
        },
        {
            name: 'ĐỒ THỂ THAO',
            idDM: 8,
        },
    ];
    const [dataProduct, setDataProduct] = useState([]);
    const [total, setTotal] = useState();
    const [idDM, setIdDM] = useState(1);
    const [loading, setLoading] = useState(true);
    console.log(total);
    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`http://localhost:5000/product/catogory/${idDM}`, {
                    params: {
                        limit: 17,
                    },
                })
                .then(function (response) {
                    setDataProduct(response.data.data);
                    setTotal(response.data.total);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 2000);
    }, [idDM]);
    // const handleFilter = (e) => {
    //     const data = dataProduct2.filter((product) => product?.name?.toLowerCase()?.includes(e.toLowerCase()));
    //     setDataProduct(data);
    // };
    return (
        <div className={cx('wrapper')}>
            <h2>EVERYDAY WEAR - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
            <div className={cx('wrapper-btn')}>
                {productCategoryList.map((item) => (
                    <Button
                        key={item.idDM}
                        primary
                        style={
                            idDM === item.idDM
                                ? {
                                      backgroundColor: '#fcaf17',
                                      color: '#fff',
                                  }
                                : {}
                        }
                        onClick={() => {
                            setIdDM(item.idDM);
                            setLoading(!loading);
                        }}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
            {loading ? (
                <LoadingIcon />
            ) : (
                <>
                    <div className={cx('wrapper-product')}>
                        {dataProduct.map((product) => (
                            <Product key={product.idSP} data={product} />
                        ))}
                    </div>
                    {total >= 17 ? (
                        <div className={cx('btn-all')}>
                            <Button to={`/product/${idDM}`} background>
                                Xem Thêm
                            </Button>
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </div>
    );
}

export default ListProduct;
