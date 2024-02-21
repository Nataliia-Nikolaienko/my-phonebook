import { NavLink } from 'react-router-dom';
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNavWrap}>
      <NavLink className={css.link} to="/registration">
        <UserAddOutlined className={css.icon} />
        Registration
      </NavLink>
      <NavLink className={css.link} to="/login">
        <LoginOutlined className={css.icon} />
        Log In
      </NavLink>
    </div>
  );
};
