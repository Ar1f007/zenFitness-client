import { useState } from 'react';
import { Divider, FormBox, FormButton, FormHeader, FormInput, Social } from '../components';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  password: '',
};

const customId = 'toast';

export const SignIn = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      toast.error('Please provide all values', {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });

      return;
    }

    console.log({ email, password });
  };
  return (
    <FormBox>
      <FormHeader
        directionText="Sign in to your account"
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

        <FormButton text="Sign in" />
      </form>
    </FormBox>
  );
};
