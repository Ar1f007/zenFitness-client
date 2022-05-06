import { useEffect, useState } from 'react';
import { Divider, FormBox, FormButton, FormHeader, FormInput, Social } from '../components';
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { splitErrorMessage } from '../utils/splitErrorMessage';

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
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

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
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      toast.success('Account created successfully', {
        toastId: customId,
      });
      navigate(from, { replace: true });
      return;
    }

    if (error) {
      toast.error(splitErrorMessage(error.message));
      return;
    }
  }, [user, navigate, from, error]);

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
          type="text"
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
