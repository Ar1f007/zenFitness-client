import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormBox, FormButton, FormInput } from '../components';

const initialState = {
  name: '',
  description: '',
  image: '',
  price: 0,
  quantity: 0,
  supplier: '',
};
const customId = 'toast';

export const AddProduct = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

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
        const { data } = await axios.post('http://localhost:5000/products', {
          headers: { 'Content-type': 'application/json' },
          values,
        });

        if (data.acknowledged) {
          toast.success('Product added successfully', {
            toastId: customId,
          });

          setTimeout(() => {
            navigate('/all-products');
          }, 1000);
        }
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          toastId: customId,
        });
      }
    };
    addProduct();

    setValues(initialState);
  };

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl font-bold capitalize text-neutral mb-8">
          Add new product
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

        <FormButton text="Submit" />
      </form>
    </FormBox>
  );
};
