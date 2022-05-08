import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormBox, FormButton, FormInput, Spinner } from '../components';
import { auth } from '../firebase.config';
import { useProductDetails } from '../hooks/useProductDetails';

const customId = 'toast';
const initialState = {
  name: '',
  description: '',
  image: '',
  price: 0,
  quantity: 0,
  supplier: '',
};

export const EditProduct = () => {
  const { id } = useParams();
  const { productDetails, loading } = useProductDetails(id);

  const [values, setValues] = useState(initialState);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setValues({
      name: productDetails.name || '',
      description: productDetails.description || '',
      image: productDetails.image || '',
      price: productDetails.price || 0,
      quantity: productDetails.quantity || 0,
      supplier: productDetails.supplier || '',
    });
  }, [productDetails]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, quantity, description, supplier } = values;

    if (!name || !description || !price || !quantity || !supplier) {
      toast.error('Please provide all values', {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
      return;
    }

    if (price <= 0 || quantity <= 0) {
      toast.error('Products value (price/quantity) can not be negative or zero', {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
      return;
    }

    const addProduct = async () => {
      try {
        const { data } = await axios.put(
          `https://frozen-atoll-57393.herokuapp.com/edit-product/${id}`,
          {
            product: { ...values, email: user.email },
          }
        );

        if (data.acknowledged) {
          toast.success('Product updated!', {
            toastId: customId,
          });

          setTimeout(() => {
            setValues(initialState);
            navigate('/my-products');
          }, 300);
        }
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          toastId: customId,
        });
        setValues(initialState);
      }
    };
    addProduct();
  };
  if (loading) {
    return <Spinner />;
  }

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl font-bold capitalize text-neutral mb-8">
          Edit product
        </h1>
        <FormInput
          label="Product Name"
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        <div className="form-control mt-6">
          <label className="text-sm font-medium leading-none text-neutral mb-2">
            <span className="label-text">Small Description</span>
          </label>
          <textarea
            className="h-24 bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-neutral py-3 w-full pl-3"
            placeholder="description..."
            name="description"
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <FormInput
          label="Product Image Link"
          type="text"
          name="image"
          value={values.image}
          handleChange={handleChange}
          classes="mt-6"
        />

        <FormInput
          label="Price"
          type="number"
          name="price"
          value={values.price}
          handleChange={handleChange}
          classes="mt-6"
        />
        <FormInput
          label="Quantity"
          type="number"
          name="quantity"
          value={values.quantity}
          handleChange={handleChange}
          classes="mt-6"
        />
        <FormInput
          label="Supplier"
          type="text"
          name="supplier"
          value={values.supplier}
          handleChange={handleChange}
        />

        <FormButton text="Update" />
      </form>
    </FormBox>
  );
};
