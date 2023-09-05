 import { combineReducers } from '@reduxjs/toolkit';
  import { filterReducer } from './FilterSlice';
  import { contactsReducer } from './ContactsSlice';
  
  const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  });
  
  export default rootReducer;