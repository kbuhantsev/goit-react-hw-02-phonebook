import { IContact } from '../App';
import Contact from '../Contact';
import { UlStyled } from './ContactsList.styled';

interface IContactList {
  contacts: Array<IContact>;
  onDelete({ id }: IContact): void;
}

const ContactList = ({ contacts, onDelete }: IContactList) => {
  return (
    <UlStyled>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </UlStyled>
  );
};

export default ContactList;