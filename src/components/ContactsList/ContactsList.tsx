import { IContact } from '../App';
import { Contact } from '../Contact/Contact';
import { UlStyled } from './ContactsList.styled';

interface IContactList {
  contacts: IContact[];
  onDelete(contact: IContact): void;
}

export const ContactList: React.FC<IContactList> = ({ contacts, onDelete }) => {
  return (
    <UlStyled>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </UlStyled>
  );
};
