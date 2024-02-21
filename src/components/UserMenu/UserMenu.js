import { useDispatch } from 'react-redux';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        <UserOutlined className={css.icon} />
        Welcome, {user.name}
      </p>
      <button
        type="button"
        className={css.logOutBtn}
        onClick={() => dispatch(logOut())}
      >
        <LogoutOutlined className={css.icon} />
        Logout
      </button>
    </div>
  );
};
