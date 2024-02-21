import { useDispatch } from 'react-redux';
import { DeleteOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
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
        <p className={css.name}>
          <UserOutlined className={css.icon} />
          {contact.name}
        </p>
        <p className={css.telefon}>
          <PhoneOutlined className={css.icon} />
          {contact.number}
        </p>
        <button onClick={handleDelete} className={css.btnDelete}>
          <DeleteOutlined className={css.icon} />
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
