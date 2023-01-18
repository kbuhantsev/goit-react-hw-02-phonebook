import React from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import debounce from 'lodash.debounce';

interface IProps {}

export interface IContact {
  id: string;
  name: string;
  number: string;
  [propsName: string]: any;
}

interface IState {
  contacts: Array<IContact>;
  filter: string;
}

const INITIAL_STATE: IState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = ({ id, name, number }: IContact): boolean => {
    const contact = {
      id,
      name,
      number,
    };
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
    return true;
  };

  onFilterChange = (value: string): void => {
    this.setState(() => ({ filter: value }));
  };

  onFilterChangeDebounced = debounce(this.onFilterChange, 500);

  onDeleteContact = ({ id }: IContact): void => {
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
