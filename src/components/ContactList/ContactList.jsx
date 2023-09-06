import React from 'react';

import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import {ContList} from './ContactList.styled'

function ContactList() {

  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );


  return (
    <ContList>
      {filteredContacts.map(({id, name, phone}) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ContList>
  );
}


export default ContactList;