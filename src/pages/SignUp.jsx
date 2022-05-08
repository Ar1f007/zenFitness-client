import { useEffect, useState } from 'react';
import { Divider, FormBox, FormButton, FormHeader, FormInput, Social } from '../components';
import { splitErrorMessage } from '../utils/splitErrorMessage';
import { auth } from '../firebase.config';
import { useToken } from '../hooks/useToken';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const customId = 'toast';

export const SignUp = () => {
  const [values, setValues] = useState(initialState);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const navigate = useNavigate();
  const token = useToken(user);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = values;

    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please provide all values', {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password does not match', {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
      return;
    }
    await createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (token) {
      toast.success('A verification link sent to your mail. Please confirm it.', {
        toastId: customId,
      });
      navigate('/');
      return;
    }

    if (error) {
      toast.error(splitErrorMessage(error.message));
      setValues({ ...values, email: '', password: '', confirmPassword: '' });
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate, error, token]);

  return (
    <FormBox>
      <FormHeader
        heading="Create an account"
        queryText="Already have account?"
        link="/sign-in"
        goto="Sign in here"
      />
      <Social />
      <Divider />

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          classes="mt-6"
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          handleChange={handleChange}
          classes="mt-6"
          passwordWithIcon
        />

        {loading ? <FormButton classes="loading" /> : <FormButton text="Sign up" />}
      </form>
    </FormBox>
  );
};
