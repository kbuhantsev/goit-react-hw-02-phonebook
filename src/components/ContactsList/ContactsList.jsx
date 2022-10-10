import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import { UlStyled } from './ContactsList.styled';
class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    onDelete: PropTypes.func,
  };

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <UlStyled>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </UlStyled>
    );
  }
}

export default ContactList;
