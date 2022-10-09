import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
  };

  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <li className="contacts-item">
        <span>
          {id} {'-->'} {name}: {number}
        </span>
        <button name="delete" type="button" onClick={() => onDelete({ id })}>
          Delete
        </button>
      </li>
    );
  }
}

export default Contact;
