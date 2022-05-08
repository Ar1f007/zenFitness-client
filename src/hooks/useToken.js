import axios from 'axios';
import { useEffect, useState } from 'react';

export const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;

      if (email) {
        const { data } = await axios.post(
          'https://frozen-atoll-57393.herokuapp.com/products/generate-token',
          { email }
        );

        setToken(data);
        localStorage.setItem('token', data);
      }
    };

    getToken();
  }, [user]);

  return token;
};
