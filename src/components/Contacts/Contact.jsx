import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  render() {
    const { name, number } = this.props;
    return (
      <li className="contacts-item">
        {name}: {number}
      </li>
    );
  }
}

export default Contact;
