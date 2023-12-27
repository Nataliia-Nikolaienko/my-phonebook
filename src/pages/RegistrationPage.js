import { Helmet } from 'react-helmet';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';

const styles = {
  registerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default function RegistrationPage() {
  return (
    <div style={styles.registerContainer}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
}
