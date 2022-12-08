import Header from './Header';
import Footer from './Footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const Location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Location]);
    return (
        <div>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
