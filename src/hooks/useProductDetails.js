import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleProductDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/products/details/${id}`);

        setProductDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchSingleProductDetails();
  }, [id]);

  return { productDetails, loading };
};
