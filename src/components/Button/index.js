import classNames from 'classnames/bind';
import styles from './Buton.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, to, href, primary, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classses = cx('wrapper', {
        primary,
    });
    return (
        <Comp classNames={classses} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
