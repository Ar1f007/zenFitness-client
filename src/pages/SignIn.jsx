import { useEffect, useState } from 'react';
import { Divider, FormBox, FormButton, FormHeader, FormInput, Social } from '../components';
import { toast } from 'react-toastify';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { splitErrorMessage } from '../utils/splitErrorMessage';
import { useToken } from '../hooks/useToken';

const initialState = {
  email: '',
  password: '',
};

const customId = 'toast';

export const SignIn = () => {
  const [values, setValues] = useState(initialState);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const token = useToken(user);
  let from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    if (!email || !password) {
      toast.error('Please provide all values', {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
      return;
    }

    await signInWithEmailAndPassword(email, password);
    setValues(initialState);
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      return;
    }

    if (error) {
      toast.error(splitErrorMessage(error.message), {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
      setValues({ ...values, email: '', password: '' });
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate, from, error, token]);

  return (
    <FormBox>
      <FormHeader
        heading="Sign in to your account"
        queryText="Don't have account?"
        link="/sign-up"
        goto="Sign up here"
      />
      <Social />
      <Divider />

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          classes="mt-6"
          passwordWithIcon
        />
        {loading ? <FormButton classes="loading" /> : <FormButton text="Sign in" />}
      </form>
    </FormBox>
  );
};
