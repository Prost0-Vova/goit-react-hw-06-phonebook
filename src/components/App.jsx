import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


const contactsState = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];


export  function App () {
  
 const [contacts, setContacts] = useState(() => {
  return JSON.parse(localStorage.getItem('contacts')) ?? contactsState;
 });
 const [filter, setFilter] = useState('')




 useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);


const addContact = (newContact) => {
  if (contacts.some((contact) => contact.name === newContact.name)) {
    alert(`${newContact.name} is already in contacts.`);
    return;
  }
  
  setContacts(prevState => [
    ...prevState,
    { ...newContact, id: nanoid() },
  ]);
};

  const deleteContact = (id) => {
    setContacts(prevContacts => {
    return prevContacts.filter((contact) => contact.id !== id)
    })
  };

 
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };

  
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
 

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    );
  }


export default App;