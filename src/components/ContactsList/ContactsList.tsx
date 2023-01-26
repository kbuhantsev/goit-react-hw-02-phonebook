import { IContact } from '../App';
import { Contact } from '../Contact/Contact';

interface IContactList {
  contacts: IContact[];
  onDelete(contact: IContact): void;
}

export const ContactList: React.FC<IContactList> = ({ contacts, onDelete }) => {
  return (
    <ul className="flex flex-col list-none gap-3 my-3 w-1/2">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
