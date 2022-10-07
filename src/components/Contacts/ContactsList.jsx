import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import './ContactList.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul className="contacts-list">
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
