import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldStyled = styled(Field)`
  margin-left: 10px;
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  width: 100px;
`;
