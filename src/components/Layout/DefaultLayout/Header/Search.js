import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import ProductItemSearch from '~/components/ProductItemSearch';
import { useDebounce } from '~/hooks';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';

import axios from 'axios';

import styles from './Header.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [totalProduct, setTotalProduct] = useState();
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    let limit = 0;
    if (debounce) {
        limit = 4;
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${process.env.REACT_APP_API_URL}product`, {
                params: {
                    q: debounce,
                    limit: limit,
                },
            })
            .then(function (response) {
                setSearchResult(response.data.data);
                setTotalProduct(response.data.total);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    return (
        <Tippy
            zIndex={999}
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {searchResult.map((result) => (
                            <ProductItemSearch key={result.id} data={result} />
                        ))}
                        <a href={`/search/${debounce}`} className={cx('btn-search-show-all')}>
                            Xem t???t c??? ({totalProduct})
                        </a>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="C???n t??m ??o Kho??c, ??o polo..."
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading-btn')} icon={faSpinner} />}

                <a href={`/search/${debounce}`} className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
            </div>
        </Tippy>
    );
}

export default Search;
