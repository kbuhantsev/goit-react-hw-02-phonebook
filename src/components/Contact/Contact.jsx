import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiStyled } from './Contact.styled';

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
  };

  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <LiStyled>
        <span>
          {name}: {number}
        </span>
        <button name="delete" type="button" onClick={() => onDelete({ id })}>
          Delete
        </button>
      </LiStyled>
    );
  }
}

export default Contact;
