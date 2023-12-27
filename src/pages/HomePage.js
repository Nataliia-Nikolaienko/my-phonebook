import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    display: 'flex',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'darkcyan',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to phonebook app <RiContactsBookLine size={64} />
      </h1>
      <p style={styles.title}>
        Please{' '}
        <Link to="/registration" style={styles.link}>
          Registration
        </Link>{' '}
        or{' '}
        <Link to="/login" style={styles.link}>
          LogIn
        </Link>{' '}
        to get started
      </p>
    </div>
  );
}
