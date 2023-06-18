import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { MainTitle, SectionTitle } from "./App.styled";

const LS_KEY = 'contacts';

export class App extends Component {
    state = {
    contacts: [],
    filter:'',
  }
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
      if (prevState.contacts !== contacts) {
        localStorage.setItem(LS_KEY, JSON.stringify(contacts))
      }
    }
    addContact = ({name, number}) => {
      if (this.state.contacts.findIndex(contact => name === contact.name) === -1) {
        const newContact = {
        name,
        number,
        id: nanoid(),
      }
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact]
      }))
      }
      else {
        alert(`${name} is already in contacts`)
      }
    }
    onFilterChange = (e) => {
      this.setState({ filter: e.target.value })
    }
    filterContacts = () => {
      return this.state.contacts.filter(({name}) => name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }
    deleteContact = (id) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact=>contact.id!==id)
      }))
    }
    render() {
      const filteredContacts = this.filterContacts();
      return <>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />
        <SectionTitle>Contacts</SectionTitle>
        <Filter onFilterChange={this.onFilterChange} value={this.state.filter} />
        {filteredContacts.length ? <ContactList contacts={filteredContacts} onDeleteBtnClick={this.deleteContact}/>: null}
        </>
    }
};
