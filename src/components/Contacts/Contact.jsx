import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    const { name } = this.props;
    return <li className="contacts-item">{name}</li>;
  }
}

export default Contact;
