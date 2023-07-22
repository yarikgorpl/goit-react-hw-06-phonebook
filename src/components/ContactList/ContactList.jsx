import React from 'react';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import { filterContacts } from 'redux/filterSlice';

import { Contact } from 'components/Contact/Contact';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Filter onChange={handleFilterChange} />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.any,
};
export default ContactList;
