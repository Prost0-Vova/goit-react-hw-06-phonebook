import {useState} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
import {Form, Input, Button} from './ContactForm.styled'


function ContactForm ({contacts}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  
  

 const  handleSubmit = (e) => {
  e.preventDefault();
  

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
      <Form onSubmit={handleSubmit}>
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