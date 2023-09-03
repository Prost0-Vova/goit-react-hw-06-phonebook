import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';
import React from 'react';

function Filter({ value, onChange }) {
  return (
    <FilterLabel>
      Filter contacts by name:
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
