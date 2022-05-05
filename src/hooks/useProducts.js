import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/products');
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return [products, setProducts];
};
