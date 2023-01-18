import { IContact } from '../App';
import { LiStyled } from './Contact.styled';

interface IContactProps {
  contact: IContact;
  onDelete({ id }: IContact): void;
}

const Contact = ({ contact, onDelete }: IContactProps) => {
  const { name, number } = contact;
  return (
    <LiStyled>
      <span>
        {name}: {number}
      </span>
      <button name="delete" type="button" onClick={() => onDelete(contact)}>
        Delete
      </button>
    </LiStyled>
  );
};

export default Contact;
