import { toast } from 'react-toastify';
import axios from 'axios';

export const Modal = ({ handleOnClickNoButton, id, products, setProducts }) => {
  const handleDelete = () => {
    const deleteProduct = async () => {
      try {
        const { data } = await axios.delete(`http://localhost:5000/products/${id}`);
        if (data.acknowledged) {
          toast.success('Deleted Successfully!');
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    deleteProduct();
    handleOnClickNoButton();
  };
  return (
    <>
      <div
        className="fixed top-0 right-0 left-0 bottom-0 z-50 h-screen"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3))' }}
      >
        <div className="flex justify-center items-center h-full px-8 text-neutral">
          <div className="p-10 bg-base-100 rounded-xl">
            <h1 className="text-center font-bold">Are you sure you want to delete it?</h1>
            <div className="flex justify-center items-center space-x-2 mt-8 ">
              <button
                className="btn btn-error text-base-100 hover:bg-red-500 px-8"
                onClick={() => handleDelete()}
              >
                Yes
              </button>
              <button className="btn px-8" onClick={() => handleOnClickNoButton()}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
