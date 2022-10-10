import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';

function Filter({ onInput }) {
  const handleInput = event => {
    const value = event.target.value;
    onInput({ value });
  };

  return (
    <LabelStyled>
      Find contacts by name
      <InputStyled name="search" onChange={handleInput}></InputStyled>
    </LabelStyled>
  );
}

Filter.propTypes = {
  onInput: PropTypes.func,
};

export default Filter;
