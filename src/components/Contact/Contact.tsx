import { IContact } from '../App';
import { LiStyled } from './Contact.styled';

interface IContactProps {
  contact: IContact;
  onDelete(contact: IContact): void;
}

export const Contact: React.FC<IContactProps> = ({ contact, onDelete }) => {
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
