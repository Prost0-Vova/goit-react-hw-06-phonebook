
import { FilterLabel, FilterInput } from './Filter.styled';
import React from 'react';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';



function Filter() {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  }

  return (
    <FilterLabel>
      Filter contacts by name:
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterLabel>
  );
}


export default Filter;
