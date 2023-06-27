import React from 'react';
import Phonebook  from './components/ContactForm/Phonebook';
import Filter from './components/Filter/Filter';


export const App = () => {
  return (
    <div>
    <h1 style={{ marginLeft: '10px' }}>Phonebook</h1>
    <Phonebook />

    <h2 style={{ marginLeft: '10px' }}>Contacts</h2>

    <Filter />

  </div>
  );
};


