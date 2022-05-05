import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState('');
  useEffect(() => {
    const fetchSingleProductDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/products/details/${id}`);

        setProductDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSingleProductDetails();
  }, [id]);

  return { productDetails };
};
