import {useState} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts} from 'redux/selectors';
import { addContact } from 'redux/ContactsSlice';
import {Form, Input, Button} from './ContactForm.styled'


function ContactForm () {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
 
 const  handleSubmit = (e) => {
  e.preventDefault();

  const addContact = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }}
  

  const newContact = { id: nanoid(), name, number };
  dispatch(addContact(newContact));
  setName('');
  setNumber('');
    
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  };

  const  handleNumberChange = (e) => {
    setNumber(e.target.value)
  };

 

    return (
      <Form onSubmit={handleSubmit}
      addContact={addContact}>
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <Input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={handleNumberChange}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }

  ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  
export default ContactForm;