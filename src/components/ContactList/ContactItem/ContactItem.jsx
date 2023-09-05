import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';
import {ListItem, Button} from '../ContactList.styled';

function ContactItem  ({ id, name, number })  {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return(
    <ListItem key={id}>
    {name}
     {number}
    <Button onClick={() => removeContact(id)}>Delete</Button>
  </ListItem>
  )
  
};


export default ContactItem;