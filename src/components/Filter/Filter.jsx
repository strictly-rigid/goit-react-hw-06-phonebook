import React from 'react';
import css from './Filter.module.css';
import { selectFilterValue } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

export default function Filter() {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      <h2 className={css.filterHeader}>Find contacts by name</h2>
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
