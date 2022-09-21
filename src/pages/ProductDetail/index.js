import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Button from '~/components/Button';
import styles from './ProductDetail.module.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Product from '~/components/Product';
const cx = classNames.bind(styles);

function ProductDetail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [dataProduct, setDataProduct] = useState([]);
    const handleCountRaise = () => {
        if (count >= data.quantity) {
            return;
        }
        setCount(count + 1);
    };
    const handleCountReduce = () => {
        if (count <= 1) {
            return;
        }
        setCount(count - 1);
    };
    console.log(data);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/product/${id}`, {
                params: {},
            })
            .then(function (response) {
                setData(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios
            .get(`http://localhost:5000/product/catogory/1`, {
                params: {
                    limit: 20,
                },
            })
            .then(function (response) {
                setDataProduct(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-home')}>
                <Link to="/">Trang chủ</Link>
                <span>/ Thời trang công sở</span>
                <span>/ Áo Sơ mi nam cộc tay kẻ Bambo</span>
            </div>
            <div className={cx('product-detail')}>
                <div className={cx('img-product')}>
                    <img src={data.image} alt="" />
                </div>
                <div className={cx('information')}>
                    <h1 className={cx('name-product')}>{data.name}</h1>
                    <span className={cx('id-product')}>SCM5049-KDE-M</span>
                    <span className={cx('price-product')}>{data.price} Đ</span>
                    <div className={cx('img-banner')}>
                        <img
                            src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/bannr_kich_thich_mua_desktop.png?1663772148744"
                            alt=""
                        />
                    </div>
                    <span className={cx('size-product')}>Kích thước : {data.size} </span>
                    <span className={cx('total-product')}>Còn {data.quantity} Sản Phẩm</span>
                    <span className={cx('quantity-product')}>Chọn Số Lượng</span>
                    <div className={cx('action-quantity')}>
                        <button onClick={handleCountReduce} className={cx('btn-subtraction')}>
                            -
                        </button>
                        <span className={cx('selection-quantity')}>{count}</span>
                        <button onClick={handleCountRaise} className={cx('btn-summation')}>
                            +
                        </button>
                    </div>
                    <Button background>Mua Ngay</Button>
                    <button className={cx('btn-add-cart')}>Thêm Vào Giỏ Hàng</button>
                    <div className={cx('identification')}>
                        <h1>Đặc điểm sản phẩm</h1>
                        <p>Sơ mi cộc tay nam kẻ caro được thiết kế trên chất liệu Bamboo</p>
                        <p>Chất liệu có co giãn nhẹ nên vô cùng thoải mái khi sử dụng</p>
                        <p>Chiếc áo có túi ngực giúp cánh mày râu có thể kẹp bút khi sử dụng</p>
                        <p>Họa tiết kẻ caro vô cùng tinh tế và sang trọng</p>
                        <p>Thép tay và cổ áo giữ phom trong thời gian dài</p>
                        <p>Sản phẩm phù hợp với nhiều độ tuổi khách hàng khác nhau</p>
                        <p>YODY - Look good. Feel good.</p>
                    </div>
                </div>
            </div>
            <h1 className={cx('suggestions')}>CÓ THỂ BẠN MUỐN MUA</h1>
            <div className={cx('wrapper-product')}>
                {dataProduct.map((product) => (
                    <Product key={product.idSP} data={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductDetail;
