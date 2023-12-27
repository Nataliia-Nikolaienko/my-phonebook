import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            className={css.loginInput}
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
            className={css.loginInput}
            required
          />
        </label>
        <button type="submit" className={css.loginBtn}>
          Log In
        </button>
        <p>
          Don't have an account yet?{' '}
          <Link to="/registration" className={css.registrationLink}>
            Registration
          </Link>
        </p>
      </form>
    </div>
  );
};
