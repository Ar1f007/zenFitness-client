import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://frozen-atoll-57393.herokuapp.com/products/products'
        );
        setProducts(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { products, setProducts, loading };
};
