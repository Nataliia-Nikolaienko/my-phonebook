import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.length === 0 && (
        <p className={css.contactsText}>
          There are no contacts in your phone book
        </p>
      )}
      <ul className={css.contactsList}>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
    </>
  );
};

// {contacts ? () : ('There are no contacts in your phone book')}

export default ContactList;
