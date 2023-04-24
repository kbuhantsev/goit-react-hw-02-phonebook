import React, { useEffect, useState } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import debounce from 'lodash.debounce';
export interface IContact {
  id: string;
  name: string;
  number: string;
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

export const App: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }, [colorMode]);

  const onSubmit = ({ id, name, number }: IContact): boolean => {
    const contact = {
      id,
      name,
      number,
    };
    if (state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    setState(prevState => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, contact],
      };
    });
    return true;
  };

  const onFilterChange = (value: string): void => {
    setState(prevState => {
      return { ...prevState, filter: value };
    });
  };

  const onFilterChangeDebounced = debounce(onFilterChange, 500);

  const onDeleteContact = ({ id }: IContact): void => {
    setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  const toggleDarkMode = (): void => {
    if (colorMode === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  };

  const { contacts, filter } = state;
  let filteredContacts = contacts;
  if (filter) {
    filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  return (
    <div className="dark:bg-black">
      <button
        className="dark:text-white"
        type="button"
        onClick={toggleDarkMode}
      >
        {colorMode === 'dark' ? 'Dark theme' : 'Light theme'}
      </button>
      <div className="flex flex-col container h-screen p-10 dark:bg-black">
        <h1 className="flex justify-center text-3xl font-medium mb-3 dark:text-white">
          Phonebook
        </h1>
        <ContactForm onSubmit={onSubmit} />

        <h2 className="mt-5 dark:text-white text-xl font-medium mb-2">
          Contacts
        </h2>
        <Filter onInput={onFilterChangeDebounced} />
        <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
      </div>
    </div>
  );
};
