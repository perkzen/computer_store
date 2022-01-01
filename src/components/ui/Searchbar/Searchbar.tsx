import React, { ChangeEvent, FC, useState } from 'react';
import classes from './Searchbar.module.scss';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch } from '../../../app/hooks';
import { searchItems } from '../../../features/shopSlice';

interface SearchbarProps {
  className?: string;
}

const Searchbar: FC<SearchbarProps> = ({ className }) => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchItems(e.target.value));
    setSearch(e.target.value);
  };

  return (
    <div className={classNames(classes.Searchbar, className)}>
      <FaSearch />
      <input placeholder={'Search...'} value={search} onChange={handleChange} />
    </div>
  );
};

export default Searchbar;
