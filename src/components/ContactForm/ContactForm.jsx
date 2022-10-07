import React, { Component } from 'react';
import './ContactForm.css';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  // static propTypes = {};

  render() {
    return (
      <form name="contact-form" className="contact-form">
        <label className="label">
          Name
          <input
            type="text"
            name="name"
            className="input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit" className="button-submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
