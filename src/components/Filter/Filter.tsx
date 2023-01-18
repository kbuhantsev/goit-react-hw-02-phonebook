import React from 'react';
import { LabelStyled, InputStyled } from './Filter.styled';

interface IProps {
  onInput(value: string): void;
}

const Filter = ({ onInput }: IProps) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onInput(value);
  };

  return (
    <LabelStyled>
      Find contacts by name
      <InputStyled name="search" onChange={handleInput}></InputStyled>
    </LabelStyled>
  );
};

export default Filter;
