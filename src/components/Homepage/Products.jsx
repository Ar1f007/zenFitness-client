import { Card } from '../Layout/Card';

const products = [
  {
    name: 'item',
    price: 100,
    quantity: 10,
    description: 'lorem ipsum semit dot emet numnudn kuttius buja',
    supplier: 'zen fitness',
    image:
      'https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
  },
  {
    name: 'item',
    price: 100,
    quantity: 100,
    description: 'lorem ipsum semit dot emet numnudn kuttius buja',
    supplier: 'zen fitness',
    image:
      'https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
  },
  {
    name: 'item',
    price: 100.99,
    quantity: 10,
    description: 'lorem ipsum semit dot emet numnudn kuttius buja',
    supplier: 'zen fitness',
    image:
      'https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
  },
  {
    name: 'item',
    price: 100,
    quantity: 10,
    description: 'lorem ipsum semit dot emet numnudn kuttius buja',
    supplier: 'zen fitness',
    image:
      'https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
  },
  {
    name: 'item',
    price: 100,
    quantity: 10,
    description: 'lorem ipsum semit dot emet numnudn kuttius buja',
    supplier: 'zen fitness',
    image:
      'https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
  },
  {
    name: 'item',
    price: 100,
    quantity: 10,
    description: 'lorem ipsum semit dot emet numnudn kuttius buja',
    supplier: 'zen fitness',
    image:
      'https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
  },
];

export const Products = () => {
  return (
    <section className="py-20 px-5">
      <h2 className="text-3xl text-center uppercase mb-10">Products</h2>

      <div className="grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 gap-y-10 lg:gap-20">
        {products.map((product, i) => (
          <Card product={product} key={i} />
        ))}
      </div>
    </section>
  );
};
