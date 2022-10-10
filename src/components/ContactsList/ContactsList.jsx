import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import './ContactList.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    onDelete: PropTypes.func,
  };

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className="contacts-list">
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
