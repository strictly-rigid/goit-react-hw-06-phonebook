import css from '../Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <div className={css.contactWrapper}>
        <span className={css.contactName}>
          {contact.name} : {contact.number}
        </span>
        <button
          type="button"
          className={css.deleteBtn}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
