import React from 'react';
import css from './Contacts.module.css';
import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div className={css.contactsContainer}>
      <ul className={css.contactsList}>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
