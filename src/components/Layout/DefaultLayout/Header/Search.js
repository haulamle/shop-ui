import { useEffect, useRef, useState } from 'react';
import ProductItem from '~/components/ProductItem';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <a href="abc">Xem tất cả (322)</a>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Cần tìm áo Khoác, áo polo..."
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <FontAwesomeIcon className={cx('loading-btn')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
