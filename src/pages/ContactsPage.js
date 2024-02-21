import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Loader from '../components/Loader/Loader';
import useModal from '../hooks/useModal';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import Filter from '../components/Filter/Filter';
import css from './Pages.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isShowing, toggle } = useModal();

  const modalClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      toggle();
    }
  };

  return (
    <>
      <h2 className={css.contactsTitle}>Your contacts</h2>
      <div className={css.contactFormContainer}>
        <Filter />
        <button className={css.addContactBtn} onClick={toggle}>
          <PlusCircleOutlined className={css.icon} />
          Add contact
        </button>
        <ContactForm isShowing={isShowing} hide={toggle} onClose={modalClose} />
      </div>

      <div className={css.contactsWrapper}>
        {isLoading ? <Loader /> : <ContactList />}
      </div>
    </>
  );
}
