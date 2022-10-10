import React, { Component } from 'react';
import './ContactForm.css';
import PropTypes from 'prop-types';
import { customAlphabet } from 'nanoid';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleSubmit(event) {
    event.preventDefault();

    const nanoid = customAlphabet('1234567890', 10);
    const id = 'id-' + nanoid(2);
    const { name, number } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ id, name, number });

    this.setState({ name: '', number: '' });
  }

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        name="contact-form"
        className="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <label className="label" htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            className="input"
            value={this.state.name}
            onChange={this.handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="label" htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            className="input"
            value={this.state.number}
            onChange={this.handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
