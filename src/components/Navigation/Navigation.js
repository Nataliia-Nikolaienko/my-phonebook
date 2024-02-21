import { NavLink } from 'react-router-dom';
import { HomeOutlined, ContactsOutlined } from '@ant-design/icons';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <NavLink className={css.link} to="/">
        <HomeOutlined className={css.icon} />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <ContactsOutlined className={css.icon} />
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
