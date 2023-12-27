import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <li className={css.contactListItem}>
        {/* <div className={css.listItemWrapper}> */}
        <p className={css.name}>{contact.name}</p>
        <p className={css.telefon}>{contact.number}</p>
        {/* </div> */}
        <button onClick={handleDelete} className={css.btnDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
