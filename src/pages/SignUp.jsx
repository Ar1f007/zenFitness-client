import { useState } from 'react';
import { Divider, FormBox, FormButton, FormHeader, FormInput, Social } from '../components';
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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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

    console.log({ email, password, name, confirmPassword });
  };
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

        <FormButton text="Sign up" />
      </form>
    </FormBox>
  );
};
