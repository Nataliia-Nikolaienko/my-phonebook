import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Pages.module.css';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.container}>
      {!isLoggedIn ? (
        <div>
          <h1 className={css.title}>
            Welcome to phonebook app <RiContactsBookLine size={64} />
          </h1>
          <p className={css.descr}>
            Please{' '}
            <Link to="/registration" className={css.link}>
              Registration
            </Link>{' '}
            or{' '}
            <Link to="/login" className={css.link}>
              LogIn
            </Link>{' '}
            to get started
          </p>
        </div>
      ) : (
        <div className={css.titleWrapper}>
          <h1 className={css.title}>Go to the tab</h1>
          <p className={css.description}>
            <Link to="/contacts" className={css.link}>
              Contacts
            </Link>
            and manage your contacts
          </p>
        </div>
      )}
    </div>
  );
}
