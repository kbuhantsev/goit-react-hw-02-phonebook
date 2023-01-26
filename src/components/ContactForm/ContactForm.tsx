import { customAlphabet } from 'nanoid';
import { ErrorMessage, Formik, Field } from 'formik';
import * as Yup from 'yup';
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

const styles = {
  input:
    'bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-0.5 px-1 ml-2',
  errorMsg: 'text-red-500 text-sm font-bold',
  button:
    'bg-blue-500 text-white font-bold py-2 px-4 min-w-fit rounded hover:bg-blue-700 ml-auto',
  form: 'flex flex-col gap-3 w-fit',
};

export const ContactForm = ({ onSubmit }: IContactForm) => {
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
      <form className={styles.form} name="contact-form">
        <label htmlFor="name">
          Name:
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage
            className={styles.errorMsg}
            name="name"
            component="div"
          />
        </label>

        <label htmlFor="number">
          Number:
          <Field className={styles.input} type="tel" name="number" />
          <ErrorMessage
            className={styles.errorMsg}
            name="number"
            component="div"
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </Formik>
  );
};
