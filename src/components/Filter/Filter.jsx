import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    onInput: PropTypes.func,
  };

  handleInput = event => {
    const { onInput } = this.props;
    const value = event.target.value;
    onInput({ value });
  };

  render() {
    return (
      <LabelStyled>
        Find contacts by name
        <InputStyled name="search" onChange={this.handleInput}></InputStyled>
      </LabelStyled>
    );
  }
}

export default Filter;
