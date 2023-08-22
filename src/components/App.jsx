import React from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import css from './App.module.css';

export default function App() {
  return (
    <>
      <div className={css.appContainer}>
        <h1 className={css.appTitle}>Phonebook</h1>
        <Form />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </>
  );
}
