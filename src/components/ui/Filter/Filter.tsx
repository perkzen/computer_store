import React, {FC, FormEvent, useEffect, useState} from 'react';
import classes from './Filter.module.scss';
import {
    categories,
    CHOOSE_BRAND,
    CHOOSE_CATEGORY,
} from '../../../store/models/Product';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {addFilter, removeFilter} from '../../../features/shopSlice';
import {RiFilterOffFill} from 'react-icons/ri';
import {v4} from 'uuid';

const Filter: FC = () => {
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState<string>(CHOOSE_CATEGORY);
    const [brand, setBrand] = useState<string>(CHOOSE_BRAND);
    const {products} = useAppSelector((state) => state.shop);

    useEffect(() => {
        return () => {
            dispatch(removeFilter());
        };
        //eslint-disable-next-line
    }, []);

    const handleRemoveFilters = () => {
        dispatch(removeFilter());
        setCategory(CHOOSE_CATEGORY);
        setBrand(CHOOSE_BRAND)
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addFilter({brand, category}));
    };

    return (
        <div className={classes.Container}>
            <small>
        <span onClick={handleRemoveFilters}>
          <RiFilterOffFill/>
          Remove filters
        </span>
            </small>
            <form onSubmit={handleSubmit}>
                <h1>Bands</h1>
                <select
                    className={classes.Select}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option disabled={true}>{CHOOSE_BRAND}</option>
                    {products.map((item) => (
                        <option key={v4()} value={item.brand}>
                            {item.brand}
                        </option>
                    ))}
                </select>

                <h1>Category</h1>
                <select
                    className={classes.Select}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option disabled={true}>{CHOOSE_CATEGORY}</option>
                    {categories?.map((item) => (
                        <option key={v4()} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <button className={classes.Button}>Apply</button>
            </form>
        </div>
    );
};

export default Filter;
