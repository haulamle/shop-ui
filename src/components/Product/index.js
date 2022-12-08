import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ data }) {
    const { addItem } = useCart();
    return (
        <div className={cx('wrapper')}>
            <>
                <Link to={`/product-detail/${data.id}`} className={cx('product-img')}>
                    <img src={data.url} alt="" />
                </Link>
                <div className={cx('wrapper-content')}>
                    <h4 className={cx('title')}>{data.name}</h4>
                    <button
                        className={cx('btn-buy')}
                        onClick={() => {
                            addItem(data);
                            toast.success('Đã Thêm Vào Giỏ Hàng !', {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                        }}
                    >
                        <FontAwesomeIcon fontSize={24} icon={faCartShopping} />
                    </button>
                </div>
                <span className={cx('price')}>{data.price}đ</span>
                {data.priceDiscount && <span className={cx('price-discount')}>{data.priceDiscount}đ</span>}
            </>
            <ToastContainer />
        </div>
    );
}

export default Product;
