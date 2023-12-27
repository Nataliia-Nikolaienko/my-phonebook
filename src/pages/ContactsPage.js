import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import Filter from '../components/Filter/Filter';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  contactsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '470px',
  },
  contactsTitle: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 60,
    textAlign: 'center',
  },
};

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div style={styles.container}>
        <ContactForm />
        <Filter />
      </div>

      <div style={styles.contactsWrapper}>
        <h2 style={styles.contactsTitle}>Your contacts</h2>
        {isLoading ? <Loader /> : <ContactList />}
      </div>
    </>
  );
}
