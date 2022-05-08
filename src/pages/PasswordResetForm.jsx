import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormBox, FormButton, FormHeader, FormInput } from '../components';
import { auth } from '../firebase.config';

const initialState = {
  email: '',
};

export const PasswordResetForm = () => {
  const [values, setValues] = useState(initialState);
  const [sendPasswordResetEmail, loading] = useSendPasswordResetEmail(auth);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.email.trim().length === 0) {
      toast.error('Please provide email', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      await sendPasswordResetEmail(values.email);
      toast.success('Reset link sent. Please check your email');
      setValues(initialState);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <FormBox>
      <FormHeader
        heading="Reset your password"
        queryText="To reset your password, enter the email address you use to sign in."
        link=""
        goto=""
      />

      <form onSubmit={handleSubmit}>
        <FormInput
          label=""
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          classes="mt-6"
        />
        {loading ? <FormButton classes="loading" /> : <FormButton text="Get reset link" />}
      </form>

      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        <Link
          to="/sign-in"
          tabIndex={0}
          aria-label="Take me back to Sign in"
          className="text-sm font-medium leading-none underline text-neutral cursor-pointer"
        >
          Take me back to sign in
        </Link>
      </p>
    </FormBox>
  );
};
