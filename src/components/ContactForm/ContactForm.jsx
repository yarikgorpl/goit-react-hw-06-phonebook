import React, { useState } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
    reset();
  };

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
