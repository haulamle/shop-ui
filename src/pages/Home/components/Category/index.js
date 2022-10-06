import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Category.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

function Category() {
    const [valueCategory, setValueCategory] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/category', {
                params: {},
            })
            .then(function (response) {
                setValueCategory(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div to={`abc`} className={cx('wrapper')}>
            <h2>DANH MỤC NỔI BẬT</h2>
            <div className={cx('wrapper-category')}>
                {valueCategory.map((data) => (
                    <Link key={data.idDM} to={`/product/${data.idDM}`}>
                        <div className={cx('category-item')}>
                            <img src={data.url} alt="" />
                            <h3 className={cx('category-name')}>{data.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Category;
