import {useState} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {Form, Input, Button} from './ContactForm.styled'


function ContactForm ({addContact}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

 const  handleSubmit = (e) => {
  e.preventDefault();
  

  const newContact = { id: nanoid(), name, number };
  addContact(newContact)
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
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    addContact: PropTypes.func.isRequired,
  };

export default ContactForm;