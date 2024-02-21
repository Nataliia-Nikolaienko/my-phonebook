import { Helmet } from 'react-helmet';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import css from './Pages.module.css';

export default function RegistrationPage() {
  return (
    <div className={css.registerContainer}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
}
