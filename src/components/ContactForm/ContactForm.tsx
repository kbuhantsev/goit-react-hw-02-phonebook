import { customAlphabet } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormStyled,
  ErrorMessageStyled,
  FieldStyled,
  ButtonStyled,
} from './ContactForm.styled';
import { IContact } from '../App';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameReExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 letters!')
    .matches(nameReExp, 'Name is not valid!')
    .required('This field is required!'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .max(13, 'Maximum 13 numbers!')
    .required('This field is required!'),
});

interface IFormValues {
  name: string;
  number: string;
}

interface IContactForm {
  onSubmit(contact: IContact): boolean;
}

interface IFormicProps {
  resetForm(): void;
}

function ContactForm({ onSubmit }: IContactForm) {
  const handleSubmit = (
    { name, number }: IFormValues,
    { resetForm }: IFormicProps
  ) => {
    const nanoid = customAlphabet('1234567890', 10);
    const id = 'id-' + nanoid(2);

    if (onSubmit({ id, name, number })) {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled name="contact-form">
        <label htmlFor="name">
          Name:
          <FieldStyled type="text" name="name" />
          <ErrorMessageStyled name="name" component="div" />
        </label>

        <label htmlFor="number">
          Number:
          <FieldStyled type="tel" name="number" />
          <ErrorMessageStyled name="number" component="div" />
        </label>

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}

export default ContactForm;
