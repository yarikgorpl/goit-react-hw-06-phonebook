import React from 'react';
import css from 'components/Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const Filter = ({ onChange }) => {
  const filter = useSelector(state => state.filter);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type=" text"
        className={css.input}
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.any,
};
export default Filter;
