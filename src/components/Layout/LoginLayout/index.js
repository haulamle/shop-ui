import Header from './Header';
import Footer from './Footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function LoginLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default LoginLayout;
