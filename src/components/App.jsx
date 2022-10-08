import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactsList';
// import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = ({ id, name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      if (!contacts.find(element => element.id === id)) {
        contacts.push({ id, name, number });
        return { contacts: contacts };
      }
    });
  };

  onFilterChange = ({ value }) => {
    this.setState({ filter: value });
  };

  onChangeDebounced = debounce(this.onFilterChange, 500);

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
        <Filter onInput={this.onChangeDebounced} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
