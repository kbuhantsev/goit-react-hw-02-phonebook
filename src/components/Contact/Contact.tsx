import { IContact } from '../App';

interface IContactProps {
  contact: IContact;
  onDelete(contact: IContact): void;
}

export const Contact: React.FC<IContactProps> = ({ contact, onDelete }) => {
  const { name, number } = contact;
  return (
    <li className="flex gap-4">
      <span>
        {name}: {number}
      </span>
      <button
        className="bg-red-500 text-white font-semibold py-0.5 px-4 rounded hover:bg-red-700 "
        name="delete"
        type="button"
        onClick={() => onDelete(contact)}
      >
        Delete
      </button>
    </li>
  );
};
