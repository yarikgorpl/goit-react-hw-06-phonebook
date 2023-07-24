import React, { useState } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({
      name: '',
      number: '',
    });
  };

  const contacts = useSelector(state => state.contacts.data);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    const existingContact = contacts.find(
      existingContact =>
        existingContact.name.toLowerCase() === nameValue.toLowerCase()
    );

    if (existingContact) {
      alert(`${nameValue} is already in contacts`);
    } else {
      dispatch(addContact(nameValue, numberValue));
      reset();
    }
  };

  return (
    <form
      className={css.form}
      name="contact_form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          value={formData.name}
          name="name"
          placeholder="Enter contact name"
          onChange={handleInputChange}
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={formData.number}
          placeholder="Enter contact number"
          onChange={handleInputChange}
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
