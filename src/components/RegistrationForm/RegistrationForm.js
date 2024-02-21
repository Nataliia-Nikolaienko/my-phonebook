import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Link type="button" className={css.goHomeBtn} to="/">
        &#129128; go home
      </Link>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            pattern="^[^\d]+$"
            className={css.registerInput}
            required
          />
        </label>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            className={css.registerInput}
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            className={css.registerInput}
            required
          />
        </label>
        <button type="submit" className={css.registerBtn}>
          <UserAddOutlined className={css.icon} />
          Register
        </button>
        <p>
          Already have an account?{' '}
          <Link to="/login" className={css.loginLink}>
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
};
