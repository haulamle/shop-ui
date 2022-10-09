import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import styles from './Search.module.scss';
import axios from 'axios';
import Product from '~/components/Product';
import LoadingIcon from '~/components/Loading';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const q = useParams();
    // const location = useLocation();
    // const type = location.pathname.split('/')[2];
    useEffect(() => {
        axios
            .get('http://localhost:5000/product', {
                params: {
                    q: q.type,
                },
            })
            .then(function (response) {
                setSearchResult(response.data.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [q.type]);

    return (
        <div className={cx('wrappper')}>
            <div className={cx('action-btn')}>
                <Link to="/">Trang chủ </Link> / <span>Tìm Kiếm</span>
            </div>
            <h1>KẾT QUẢ TÌM KIẾM SẢN PHẨM "{q.type}"</h1>
            {loading ? (
                <LoadingIcon />
            ) : (
                <div className={cx('wrapper-product')}>
                    {searchResult.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
