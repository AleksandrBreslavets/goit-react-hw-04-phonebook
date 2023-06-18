import { nanoid } from "nanoid";
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { MainTitle, SectionTitle } from "./App.styled";

const LS_KEY = 'contacts';

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts]);
  
  const addContact = ({ name, number }) => {
    if (contacts.findIndex(contact => name === contact.name) === -1) {
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
    else {
      toast.error(`${name} is already in contacts`);
    }
  };

  const onFilterChange = (e) => {
    setFilter(e.target.value)
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = id => {
    setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== id)))
  };

  return <>
    <MainTitle>Phonebook</MainTitle>
    <ContactForm addContact={addContact} />
    <SectionTitle>Contacts</SectionTitle>
    <Filter onFilterChange={onFilterChange} value={filter} />
    {filterContacts().length ? <ContactList contacts={filterContacts()} onDeleteBtnClick={deleteContact} /> : null}
    <Toaster
      position="top-right"
      toastOptions={{ duration: 2000 }} />
  </>
    
};