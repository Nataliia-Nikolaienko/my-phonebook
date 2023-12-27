import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default function LoginPage() {
  return (
    <div style={styles.loginContainer}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
