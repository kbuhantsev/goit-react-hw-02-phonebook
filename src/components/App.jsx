import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactsList';
import debounce from 'lodash.debounce';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  onFilterChange = ({ value }) => {
    this.setState({ filter: value });
  };

  onFilterChangeDebounced = debounce(this.onFilterChange, 500);

  onDeleteContact = ({ id }) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    let filteredContacts = contacts;
    if (filter) {
      filteredContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return (
      <div style={{ marginLeft: '30px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter onInput={this.onFilterChangeDebounced} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}
